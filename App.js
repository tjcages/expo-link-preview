import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import LinkItem from "./views/links/LinkItem";

export default function Link() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return <LinkItem link={"https://tylerj.me"} />;
  }
}
