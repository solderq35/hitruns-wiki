/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "Docusaurus": [
    {
      "type": "category",
      "label": "Gameplay Technique Guides",
      "link": {
        "type": "generated-index",
        "slug": "index"
      },
      "items": ["boosting", "electrocution", "explosives", "fast_anim", "guns", "lures", "miscellaneous"]
    },
    {
      "type": "doc",
      "id": "beginner"
    },
    {
      "type": "doc",
      "id": "fullgame_tutorials"
    },
    {
      "type": "doc",
      "id": "h3_patch_notes"
    },
    {
      "type": "category",
      "label": "Livesplit",
      "link": {
        "type": "generated-index",
        "slug": "livesplit"
      },
      "items": ["livesplit_peacock", "livesplit_manual", "livesplit_auto_official"]
    },
    {
      "type": "doc",
      "id": "discord"
    },
    {
      "type": "doc",
      "id": "resources"
    },
    {
      "type": "doc",
      "id": "downpatching"
    }
  ]

};

module.exports = sidebars;
