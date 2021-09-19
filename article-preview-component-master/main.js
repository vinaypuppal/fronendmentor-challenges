import "./styles.css";

const mobileBreakpoint = "(min-width: 640px)";
const ids = {
  shareContainer: "share-container",
  shareBtn: "share-btn",
  shareView: "share-view",
  avatarView: "avatar-view",
};

const screenType = {
  desktop: "desktop",
  mobile: "mobile",
};

const classNameMap = {
  [screenType.mobile]: {
    [ids.shareContainer]: {
      active: ["bg-gray-600"],
      default: ["bg-white"],
    },
    [ids.shareBtn]: {
      active: ["bg-gray-500", "text-white"],
      default: ["bg-[#eff2f7]", "text-gray-600"],
    },
    [ids.shareView]: {
      active: ["flex"],
      default: ["hidden"],
    },
    [ids.avatarView]: {
      active: ["hidden"],
      default: ["flex"],
    },
  },
  [screenType.desktop]: {
    [ids.shareBtn]: {
      active: ["bg-gray-500", "text-white"],
      default: ["bg-[#eff2f7]", "text-gray-600"],
    },
    [ids.shareView]: {
      active: [
        "flex",
        "bg-gray-600",
        "px-6",
        "rounded-lg",
        "absolute",
        "right-5",
        "-top-9",
      ],
      default: ["hidden"],
    },
  },
};

/**
 *
 * @param {HTMLElement} el
 * @param {string} id
 * @param {boolean} isActive
 * @param {"mobile" | "desktop"} screen
 */
function toogleClassNames(el, id, isActive, screen) {
  const classNames = classNameMap[screen][id];
  const classToRemove = isActive ? classNames.active : classNames.default;
  const classToAdd = isActive ? classNames.default : classNames.active;
  el.classList.remove(...classToRemove);
  el.classList.add(...classToAdd);
}

function rendenShareOptions({
  shareBtn,
  shareView,
  shareContainer,
  avatarView,
  isShareBtnActive,
  isDesktop,
}) {
  const screen = isDesktop ? screenType.desktop : screenType.mobile;
  toogleClassNames(shareBtn, ids.shareBtn, isShareBtnActive, screen);
  toogleClassNames(shareView, ids.shareView, isShareBtnActive, screen);
  if (!isDesktop) {
    toogleClassNames(
      shareContainer,
      ids.shareContainer,
      isShareBtnActive,
      screen
    );
    toogleClassNames(avatarView, ids.avatarView, isShareBtnActive, screen);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const shareContainer = document.getElementById(ids.shareContainer);
  const shareBtn = document.getElementById(ids.shareBtn);
  const shareView = document.getElementById(ids.shareView);
  const avatarView = document.getElementById(ids.avatarView);
  let isShareBtnActive = false;

  shareBtn.addEventListener("click", (e) => {
    const { matches: isDesktop } = window.matchMedia(mobileBreakpoint);
    rendenShareOptions({
      shareBtn,
      shareView,
      shareContainer,
      avatarView,
      isShareBtnActive,
      isDesktop,
    });
    isShareBtnActive = !isShareBtnActive;
  });

  window
    .matchMedia(mobileBreakpoint)
    .addEventListener("change", ({ matches: isDesktop }) => {
      if (!isShareBtnActive) {
        return;
      }
      // reset previous screen UI
      if (isShareBtnActive) {
        rendenShareOptions({
          shareBtn,
          shareView,
          shareContainer,
          avatarView,
          isShareBtnActive,
          isDesktop: !isDesktop,
        });
      }
      // show current screen UI
      rendenShareOptions({
        shareBtn,
        shareView,
        shareContainer,
        avatarView,
        isShareBtnActive: false,
        isDesktop,
      });
    });
});
