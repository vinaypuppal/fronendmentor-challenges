import "./styles.css";

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
 * @param {null | "active"} state
 * @param {"mobile" | "desktop"} screen
 */
function toogleClassNames(el, id, state, screen) {
  const classNames = classNameMap[screen][id];
  const classToRemove = state ? classNames.active : classNames.default;
  const classToAdd = state ? classNames.default : classNames.active;
  el.classList.remove(...classToRemove);
  el.classList.add(...classToAdd);
}

function rendenShareOptions({
  shareBtn,
  shareView,
  shareContainer,
  avatarView,
  shareBtnState,
  isDesktop,
}) {
  const screen = isDesktop ? screenType.desktop : screenType.mobile;
  toogleClassNames(shareBtn, ids.shareBtn, shareBtnState, screen);
  toogleClassNames(shareView, ids.shareView, shareBtnState, screen);
  if (!isDesktop) {
    toogleClassNames(shareContainer, ids.shareContainer, shareBtnState, screen);
    toogleClassNames(avatarView, ids.avatarView, shareBtnState, screen);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const shareContainer = document.getElementById(ids.shareContainer);
  const shareBtn = document.getElementById(ids.shareBtn);
  const shareView = document.getElementById(ids.shareView);
  const avatarView = document.getElementById(ids.avatarView);
  let shareBtnState = null;
  shareBtn.addEventListener("click", (e) => {
    const { matches: isDesktop } = window.matchMedia("(min-width: 640px)");
    rendenShareOptions({
      shareBtn,
      shareView,
      shareContainer,
      avatarView,
      shareBtnState,
      isDesktop,
    });
    shareBtnState = shareBtnState ? null : "active";
  });
  window
    .matchMedia("(min-width: 640px)")
    .addEventListener("change", ({ matches: isDesktop }) => {
      if (!shareBtnState) {
        return;
      }
      // reset previous screen UI
      if (shareBtnState) {
        rendenShareOptions({
          shareBtn,
          shareView,
          shareContainer,
          avatarView,
          shareBtnState,
          isDesktop: !isDesktop,
        });
      }
      // show current screen UI
      rendenShareOptions({
        shareBtn,
        shareView,
        shareContainer,
        avatarView,
        shareBtnState: null,
        isDesktop,
      });
    });
});
