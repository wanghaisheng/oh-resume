import { CHROME_PRINT_BOTTOM } from "./constants";
import type { ResumeStyles } from "../types";

const updatePageMargin = (page: HTMLDivElement, state: ResumeStyles) => {
  page.style.paddingTop = `${state.marginV}px`;
  page.style.paddingBottom = `${Math.max(
    state.marginV - 10,
    CHROME_PRINT_BOTTOM
  )}px`;
  page.style.paddingLeft = `${state.marginH}px`;
  page.style.paddingRight = `${state.marginH}px`;
};

const updateThemeColor = (node: HTMLElement, state: ResumeStyles) => {
  if (["H1", "H2", "H3", "A"].indexOf(node.tagName) === -1) return;
  if (node.tagName === "A" && node.classList.contains("preview-header-link"))
    return; // links in header are black
  node.style.color = state.themeColor;
  if (node.tagName === "H2") node.style.borderBottomColor = state.themeColor;
};

const updateLineHeight = (node: HTMLElement, state: ResumeStyles) => {
  const lineHeight = state.lineHeight / 100;
  if (["P", "LI"].indexOf(node.tagName) !== -1)
    node.style.lineHeight = lineHeight.toFixed(2);
  if (["H2", "H3"].indexOf(node.tagName) !== -1)
    node.style.lineHeight = (lineHeight * 1.154).toFixed(2);
  if (node.tagName === "DL")
    node.style.lineHeight = (lineHeight * 1.038).toFixed(2);
};

const updateParagraphSpace = (node: HTMLElement, state: ResumeStyles) => {
  if (node.tagName === "H2") node.style.marginTop = `${state.paragraphSpace}px`;
};

const updateFontFamily = (container: HTMLElement, state: ResumeStyles) => {
  const fontEN = state.fontEN.fontFamily || state.fontEN.name;
  const fontCN = state.fontCN.fontFamily || state.fontCN.name;
  container.style.fontFamily = fontEN + ", " + fontCN;
};

const updateFontSize = (node: HTMLElement, state: ResumeStyles) => {
  if (node.classList.contains("preview")) {
    node.style.fontSize = `${state.fontSize}px`;
    return;
  }
  if (node.tagName === "H1")
    node.style.fontSize = `${Math.ceil(state.fontSize * 2.13)}px`;
  if (["H2", "H3"].indexOf(node.tagName) !== -1)
    node.style.fontSize = `${Math.ceil(state.fontSize * 1.2)}px`;
};

export const updateDomStyles = (
  container: HTMLDivElement,
  state: ResumeStyles
) => {
  updateFontFamily(container, state);
  updateFontSize(container, state); // Body font size

  // Page margin
  const pages = container.querySelectorAll(
    ".preview-page"
  ) as NodeListOf<HTMLDivElement>;
  for (const page of pages) updatePageMargin(page, state);

  // Other styles
  const childNodes = container.querySelectorAll("*") as NodeListOf<HTMLElement>;
  for (const node of childNodes) {
    updateThemeColor(node, state);
    updateLineHeight(node, state);
    updateParagraphSpace(node, state);
    updateFontSize(node, state); // Title font size
  }
};