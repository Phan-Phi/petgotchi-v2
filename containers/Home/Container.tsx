import { useMedia } from "@/hooks";

import MobileContainer from "./mobile/MobileContainer";
import DesktopContainer from "./desktop/DesktopContainer";

const HomeContainer = () => {
  const { isMdDown } = useMedia();

  if (isMdDown) {
    return <MobileContainer />;
  }

  return <DesktopContainer />;
};

export default HomeContainer;
