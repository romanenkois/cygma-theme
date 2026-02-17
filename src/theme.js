// Cygma Theme — Theme Definition
// Uses color variables from colors.js instead of hardcoded hex values.

const { palette: c, alpha } = require("./colors");

const theme = {
  name: "Cygma",
  $schema: "vscode://schemas/color-theme",
  type: "dark",
  colors: {
    // Activity Bar
    "activityBar.background": c.bg,
    "activityBar.border": alpha(c.bg, "60"),
    "activityBar.foreground": c.fg,
    "activityBarBadge.background": c.fg,
    "activityBarBadge.foreground": c.bg,

    // Badge
    "badge.background": alpha(c.bg, "30"),
    "badge.foreground": c.fg,

    // Breadcrumb
    "breadcrumb.activeSelectionForeground": c.yellow,
    "breadcrumb.background": c.bg,
    "breadcrumb.focusForeground": c.fg,
    "breadcrumb.foreground": c.muted,
    "breadcrumbPicker.background": c.bg,

    // Button / UI
    "button.background": alpha(c.muted, "50"),
    "contrastBorder": alpha(c.muted, "40"),
    "debugToolBar.background": c.bg,
    "diffEditor.insertedTextBackground": alpha(c.teal, "4b"),
    "diffEditor.removedTextBackground": alpha(c.red, "7b"),
    "dropdown.background": c.bg,
    "dropdown.border": alpha("#01fff2", "10"),

    // Editor
    "editor.background": c.bg,
    "editor.findMatchBackground": c.bg,
    "editor.findMatchBorder": c.muted,
    "editor.findMatchHighlightBackground": alpha(c.muted, "93"),
    "editor.findMatchHighlightBorder": alpha(c.fg, "30"),
    "editor.foreground": c.fg,
    "editor.lineHighlightBackground": alpha(c.bg, "50"),
    "editor.selectionBackground": alpha(c.fg, "30"),
    "editor.selectionHighlightBackground": alpha(c.muted, "6b"),
    "editor.selectionHighlightBorder": alpha(c.fg, "f0"),

    // Editor — Brackets, Cursor, Errors
    "editorBracketMatch.background": c.bg,
    "editorBracketMatch.border": alpha(c.fg, "30"),
    "editorCursor.foreground": c.darkPink,
    "editorError.foreground": c.red,
    "editorGroup.border": alpha(c.bg, "30"),
    "editorGroupHeader.tabsBackground": c.bg,
    "editorGutter.addedBackground": c.yellow,
    "editorGutter.deletedBackground": c.red,
    "editorGutter.modifiedBackground": c.darkPink,
    "editorHoverWidget.background": c.bg,
    "editorHoverWidget.border": alpha(c.fg, "10"),
    "editorIndentGuide.activeBackground1": c.bg,
    "editorIndentGuide.background1": alpha(c.bg, "70"),
    "editorInfo.foreground": alpha(c.fg, "70"),
    "editorLineNumber.activeForeground": c.fg,
    "editorLineNumber.foreground": alpha(c.muted, "c0"),
    "editorLink.activeForeground": c.fg,
    "editorMarkerNavigation.background": alpha(c.fg, "05"),
    "editorOverviewRuler.border": c.bg,
    "editorOverviewRuler.errorForeground": alpha(c.red, "7b"),
    "editorOverviewRuler.findMatchForeground": alpha(c.muted, "33"),
    "editorOverviewRuler.infoForeground": alpha(c.fg, "40"),
    "editorOverviewRuler.warningForeground": alpha(c.red, "7b"),
    "editorRuler.foreground": c.bg,
    "editorSuggestWidget.background": c.bg,
    "editorSuggestWidget.border": alpha(c.fg, "10"),
    "editorSuggestWidget.foreground": c.fg,
    "editorSuggestWidget.highlightForeground": c.darkPink,
    "editorSuggestWidget.selectedBackground": alpha(c.muted, "20"),

    "editorWarning.foreground": c.red,
    "editorWhitespace.foreground": alpha(c.fg, "40"),
    "editorWidget.background": c.bg,
    "editorWidget.border": alpha(c.darkPink, "00"),
    "editorWidget.resizeBorder": c.muted,

    // Extension
    "extensionButton.prominentBackground": alpha(c.deepPink, "90"),
    "extensionButton.prominentHoverBackground": c.yellow,

    "focusBorder": alpha(c.fg, "00"),

    // Git
    "gitDecoration.conflictingResourceForeground": alpha(c.red, "ee"),
    "gitDecoration.deletedResourceForeground": c.yellow,
    "gitDecoration.ignoredResourceForeground": c.muted,
    "gitDecoration.modifiedResourceForeground": c.yellow,
    "gitDecoration.untrackedResourceForeground": c.fg,

    // Input
    "input.background": c.bg,
    "input.border": alpha(c.fg, "10"),
    "input.foreground": c.fg,
    "input.placeholderForeground": alpha(c.fg, "60"),
    "inputOption.activeBackground": alpha(c.fg, "30"),
    "inputOption.activeBorder": alpha(c.fg, "30"),
    "inputValidation.errorBorder": alpha(c.red, "50"),
    "inputValidation.infoBorder": alpha(c.fg, "50"),
    "inputValidation.warningBorder": alpha(c.darkPink, "50"),

    // List
    "list.activeSelectionBackground": c.bg,
    "list.activeSelectionForeground": c.teal,
    "list.focusBackground": c.bg,
    "list.focusForeground": c.fg,
    "list.highlightForeground": c.muted,
    "list.hoverBackground": c.bg,
    "list.hoverForeground": c.fg,
    "list.inactiveSelectionBackground": alpha(c.bg, "30"),
    "list.inactiveSelectionForeground": c.muted,
    "list.warningForeground": alpha(c.red, "ee"),
    "listFilterWidget.background": alpha(c.bg, "30"),
    "listFilterWidget.noMatchesOutline": alpha(c.bg, "30"),
    "listFilterWidget.outline": alpha(c.bg, "30"),

    // Menu
    "menu.background": alpha(c.bg, "f8"),
    "menu.border": alpha(c.muted, "50"),
    "menu.foreground": c.fg,
    "menu.selectionBackground": c.bg,
    "menu.selectionBorder": alpha(c.bg, "30"),
    "menu.selectionForeground": c.fg,
    "menu.separatorBackground": c.fg,
    "menubar.selectionBackground": c.bg,
    "menubar.selectionBorder": alpha(c.muted, "50"),
    "menubar.selectionForeground": c.fg,

    // Minimap
    "minimap.background": c.bg,
    "minimapGutter.addedBackground": c.yellow,
    "minimapGutter.deletedBackground": c.darkPink,
    "minimapGutter.modifiedBackground": c.deepPink,
    "minimapSlider.activeBackground": alpha(c.deepPink, "94"),
    "minimapSlider.hoverBackground": alpha(c.deepPink, "69"),
    "minimapSlider.background": alpha(c.deepPink, "2a"),

    // Notifications / Panel
    "notificationLink.foreground": c.muted,
    "notifications.background": c.bg,
    "notifications.foreground": c.fg,
    "panel.background": c.bg,
    "panel.border": alpha(c.muted, "50"),
    "panelTitle.activeBorder": c.muted,
    "panelTitle.activeForeground": c.fg,
    "panelTitle.inactiveForeground": c.fg,
    "peekView.border": alpha(c.bg, "30"),
    "peekViewEditor.background": alpha(c.fg, "05"),
    "peekViewEditor.matchHighlightBackground": alpha(c.muted, "50"),
    "peekViewEditorGutter.background": alpha(c.fg, "05"),
    "peekViewResult.background": alpha(c.fg, "05"),
    "peekViewResult.matchHighlightBackground": alpha(c.muted, "50"),
    "peekViewResult.selectionBackground": alpha(c.muted, "70"),
    "peekViewTitle.background": alpha(c.fg, "05"),
    "peekViewTitleDescription.foreground": alpha(c.fg, "60"),
    "pickerGroup.foreground": c.muted,
    "progressBar.background": c.muted,

    // Scrollbar
    "scrollbar.shadow": alpha(c.bg, "00"),
    "scrollbarSlider.activeBackground": alpha(c.muted, "cc"),
    "scrollbarSlider.background": alpha(c.muted, "bb"),
    "scrollbarSlider.hoverBackground": alpha(c.muted, "ee"),

    // Selection / Settings
    "selection.background": c.muted,
    "settings.checkboxBackground": c.bg,
    "settings.checkboxForeground": c.fg,
    "settings.dropdownBackground": c.bg,
    "settings.dropdownForeground": c.fg,
    "settings.headerForeground": c.muted,
    "settings.modifiedItemIndicator": c.muted,
    "settings.numberInputBackground": c.bg,
    "settings.numberInputForeground": c.fg,
    "settings.textInputBackground": c.bg,
    "settings.textInputForeground": c.fg,

    // Sidebar
    "sideBar.background": c.bg,
    "sideBar.border": alpha(c.muted, "50"),
    "sideBar.foreground": c.fg,
    "sideBarSectionHeader.background": c.bg,
    "sideBarSectionHeader.border": alpha(c.muted, "50"),
    "sideBarSectionHeader.foreground": c.fg,
    "sideBarTitle.foreground": c.muted,

    // Status Bar
    "statusBar.background": c.bg,
    "statusBar.border": alpha(c.bg, "00"),
    "statusBar.debuggingBackground": c.pink,
    "statusBar.debuggingForeground": c.fg,
    "statusBar.foreground": c.fg,
    "statusBar.noFolderBackground": c.bg,
    "statusBarItem.hoverBackground": alpha(c.muted, "20"),
    "statusBarItem.remoteBackground": c.pink,
    "statusBarItem.remoteForeground": c.bg,

    // Tabs
    "tab.activeBackground": alpha(c.darkGray, "7b"),
    "tab.activeBorder": c.yellow,
    "tab.activeForeground": c.fg,
    "tab.activeModifiedBorder": c.darkGray,
    "tab.border": c.bg,
    "tab.inactiveBackground": c.bg,
    "tab.inactiveForeground": alpha(c.fg, "af"),
    "tab.unfocusedActiveBorder": c.muted,
    "tab.unfocusedActiveBackground": alpha(c.muted, "40"),
    "tab.unfocusedActiveForeground": c.fg,
    "tab.unfocusedInactiveBackground": alpha("#4dcccc", "10"),
    "tab.unfocusedInactiveForeground": alpha(c.fg, "7f"),

    // Terminal
    "terminal.ansiBlack": c.bg,
    "terminal.ansiBlue": c.teal,
    "terminal.ansiBrightBlack": c.darkGray,
    "terminal.ansiBrightBlue": c.fg,
    "terminal.ansiBrightCyan": c.fg,
    "terminal.ansiBrightGreen": c.pink,
    "terminal.ansiBrightMagenta": c.pink,
    "terminal.ansiBrightRed": c.red,
    "terminal.ansiBrightWhite": c.fg,
    "terminal.ansiBrightYellow": c.yellow,
    "terminal.ansiCyan": c.teal,
    "terminal.ansiGreen": c.teal,
    "terminal.ansiMagenta": c.pink,
    "terminal.ansiRed": c.red,
    "terminal.ansiWhite": c.fg,
    "terminal.ansiYellow": c.yellow,

    "terminalCursor.background": c.bg,
    "terminalCursor.foreground": c.darkPink,

    // Text / Title
    "textLink.activeForeground": c.fg,
    "textLink.foreground": c.muted,
    "titleBar.activeBackground": c.bg,
    "titleBar.activeForeground": c.muted,
    "titleBar.border": alpha(c.darkGray, "00"),
    "titleBar.inactiveBackground": c.bg,
    "titleBar.inactiveForeground": c.darkGray,

    // Tree / Widget
    "tree.indentGuidesStroke": c.bg,
    "widget.shadow": alpha(c.bg, "30"),
  },
  tokenColors: [
    // ── General ──────────────────────────────────────────────
    {
      scope: ["punctuation.definition.comment", "comment"],
      settings: {
        foreground: c.muted,
        fontStyle: "italic",
      },
    },
    {
      scope: ["meta"],
      settings: {
        foreground: c.fg,
      },
    },
    {
      scope: [
        "entity.name.function",
        "meta.class",
        "meta.method",
        "storage",
        "variable",
        "meta.decorator",
      ],
      settings: {
        foreground: c.pink,
      },
    },
    {
      scope: [
        "variable.object.property",
        "meta.function-call",
        "keyword.control.flow",
        "keyword.control.conditional",
        "keyword.control.loop",
        "keyword.control.switch",
        "keyword.control.trycatch",
        "keyword.control.return",
        "keyword.control.throw",
        "keyword.control.break",
        "keyword.control.continue",
        "keyword.control.goto",
        "keyword.control.else",
        "keyword.control.elseif",
        "keyword.control.default",
        "keyword.control.case",
        "keyword.control.finally",
        "keyword.control.export",
        "keyword.control.import",
        "keyword.control.from",
        "variable.language.this",
        "meta.import",
        "constant",
      ],
      settings: {
        foreground: c.yellow,
      },
    },
    {
      scope: [
        "meta.block",
        "string",
        "punctuation.definition.block",
        "keyword.operator.logical",
      ],
      settings: {
        foreground: c.teal,
      },
    },
    {
      scope: [
        "meta.parameters",
        "variable.parameter",
        "variable.other.object.property",
        "variable.other.property",
        "punctuation.separator",
        "punctuation.accessor",
        "keyword.operator",
      ],
      settings: {
        foreground: c.fg,
      },
    },
    {
      scope: ["meta.function-call", "meta.parameters", "string"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "meta.decorator",
        "entity.name.function",
        "keyword.control",
        "meta.type",
      ],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: ["*url*", "*link*", "*uri*"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: ["variable.other.object.property", "variable.other.object"],
      settings: {
        fontStyle: "none",
      },
    },

    // ── HTML ─────────────────────────────────────────────────
    {
      scope: ["entity.name.tag.html"],
      settings: {
        foreground: c.pink,
      },
    },
    {
      scope: [
        "entity.other.attribute-name.html",
        "meta.tag.other.unrecognized.html.derivative",
      ],
      settings: {
        foreground: c.yellow,
      },
    },
    {
      scope: [
        "entity.other.attribute-name.html",
        "text.html.derivative",
        "punctuation.definition.tag.begin",
        "punctuation.definition.tag.end",
      ],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "meta.tag.structure.div.start",
        "meta.tag.structure.div.end",
        "punctuation.definition.tag.begin",
        "punctuation.definition.tag.end",
      ],
      settings: {
        foreground: c.muted,
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "entity.name.tag.html",
        "string.quoted.double.html",
        "string.quoted.single.html",
      ],
      settings: {
        fontStyle: "none",
      },
    },

    // ── CSS ──────────────────────────────────────────────────
    {
      scope: [
        "entity.other.attribute-name",
        "entity.name.tag.input",
        "entity.name.tag",
        "support.constant.media",
      ],
      settings: {
        foreground: c.pink,
      },
    },
    {
      scope: ["support.function.misc"],
      settings: {
        foreground: c.yellow,
      },
    },
    {
      scope: [
        "entity.other.attribute-name.pseudo-class",
        "variable.scss",
        "variable.css",
        "variable.less",
        "variable.sass",
        "variable.other",
        "keyword.control.at-rule.media",
      ],
      settings: {
        foreground: c.teal,
      },
    },
    {
      scope: ["punctuation.definition.entity"],
      settings: {
        foreground: c.fg,
      },
    },

    // ── JS ───────────────────────────────────────────────────
    {
      scope: ["support.type.object"],
      settings: {
        foreground: c.pink,
      },
    },

    // ── JSON ─────────────────────────────────────────────────
    {
      scope: [
        "support.type.property-name",
        "support.type.property-name.json",
        "support.type.property-name.json.comments",
        "string.json.comments",
      ],
      settings: {
        foreground: c.pink,
      },
    },
    {
      scope: [
        "support.type.property-name",
        "support.type.property-name.json",
        "support.type.property-name.json.comments",
        "string.json.comments",
      ],
      settings: {
        fontStyle: "none",
      },
    },

    // ── Markdown ─────────────────────────────────────────────
    {
      scope: ["markup.heading"],
      settings: {
        foreground: c.pink,
      },
    },

    // ── Additional ───────────────────────────────────────────
    {
      scope: ["invalid", "invalid.illegal", "invalid.deprecated"],
      settings: {
        foreground: c.red,
      },
    },
  ],
};

module.exports = theme;
