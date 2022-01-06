import * as Types from "./types";
import { sortMessages } from "../api/utils"

const initialState = {
  user: null,
  messages: [],
  friends: [],
  loadingState: false,
  readState: [],

  members: [], // the id's of all groups this user is a member of
  groups: [], // the actual content of the group
  threads: [], // threads that contain messages & replies

  selectedGroup: null, // the current group selected
  selectedThread: null, // the current thread selected
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_LOADING_STATE:
      return { ...state, loadingState: action.payload.loadingState };
    case Types.UPDATE_CONTACTS:
      return { ...state, contacts: action.payload.contacts };
    case Types.UPDATE_USER:
      return { ...state, user: action.payload.user };
    case Types.UPDATE_GROUPS:
      return {
        ...state,
        groups: [action.payload.group, state.groups],
        loadingState: false,
      };
    case Types.CREATE_GROUP:
      return {
        ...state,
        groups: [action.payload.group, ...state.groups],
        loadingState: false,
      };
    case Types.UPDATE_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages,
        loadingState: false,
      };
    case Types.UPDATE_FRIENDS:
      return { ...state, friends: action.payload.friends };

    case Types.UPDATE_GROUP_MESSAGES:
      return {
        ...state,
        groupMessages: action.payload.groupMessages,
        loadingState: false,
      };
    case Types.CREATE_GROUP_MESSAGE:
      return {
        ...state,
        groupMessages: [action.payload.groupMessage, ...state.groupMessages],
      };

    case Types.ADD_GROUP_IDS:
      return {
        ...state,
        members: action.payload.members,
      };

    case Types.ADD_GROUP_FRIENDS:
      return {
        ...state,
        friends: [
          ...new Map(
            [...action.payload.friends, ...state.friends].map((v) => [v.uid, v])
          ).values(),
        ], // prevent duplicates by uid
      };

    case Types.ADD_GROUP_INFO:
      const filteredGroups = state.groups.filter(
        (group) => group.id !== action.payload.group.id
      );
      return {
        ...state,
        groups: [...filteredGroups, action.payload.group],
      };

    case Types.ADD_RECENT_THREADS:
      return {
        ...state,
        threads: [
          ...new Map(
            [...action.payload.threads, ...state.threads].map((v) => [v.id, v])
          ).values(),
        ], // prevent duplicates by id
      };

    case Types.ADD_MESSAGES:
      const messages = [
        ...new Map(
          [...action.payload.messages, ...state.messages].map((v) => [v.id, v])
        ).values(),
      ]; // prevent duplicates by id
      return {
        ...state,
        messages: messages,
      };

    case Types.UPDATE_MESSAGE:
      const updatedMessages = state.messages;
      updatedMessages[
        state.messages.findIndex(
          (message) => message.id === action.payload.message.id
        )
      ] = action.payload.message; // replace the old message with new
      return {
        ...state,
        messages: updatedMessages,
      };

    case Types.UPDATE_GROUP:
      const updatedGroups = state.groups;
      updatedGroups[
        state.groups.findIndex((group) => group.id === action.payload.group.id)
      ] = action.payload.group; // replace the old group with new
      return {
        ...state,
        groups: updatedGroups,
        selectedGroup: action.payload.group,
      };

    case Types.SET_SELECTED_GROUP:
      return {
        ...state,
        selectedGroup: action.payload.selectedGroup,
      };

    case Types.UPDATE_FRIEND:
      const updatedFriends = state.friends;
      updatedFriends[
        state.friends.findIndex(
          (friend) => friend.uid === action.payload.friend.uid
        )
      ] = action.payload.friend; // replace the old friend with new

      console.log("updatedFriends");
      console.log(updatedFriends);
      return {
        ...state,
        friends: updatedFriends,
      };

    case Types.UPDATE_READ_STATE:
      const updatedState = state.readState;
      updatedState[action.payload.group.id] =
        action.payload.readState.updated_at;
      return {
        ...state,
        readState: updatedState,
      };

    case Types.SET_SELECTED_THREAD:
      return {
        ...state,
        selectedThread: action.payload.selectedThread,
      };

    default:
      return state;
  }
};

export { reducer };
