export const manifest = {
  screens: {
    scr_i88xdf: { name: "Hero", route: "/#top", position: { "x": 160, "y": 220 } },
    scr_gvfrt0: { name: "Problem", route: "/#problem", position: { "x": 1560, "y": 220 } },
    scr_urtl20: { name: "Solution", route: "/#solution", position: { "x": 2960, "y": 220 } },
    scr_vse01s: { name: "Live Monitoring", route: "/#monitoring", position: { "x": 160, "y": 2200 } },
    scr_42ne7f: { name: "Camera Management", route: "/#cameras", position: { "x": 1560, "y": 2200 } },
    scr_vafboy: { name: "Alert Management", route: "/#alerts", position: { "x": 2960, "y": 2200 } },
    scr_d6bzjg: { name: "Recording Management", route: "/#recordings", position: { "x": 4360, "y": 2200 } },
    scr_07jrrc: { name: "Maintenance", route: "/#maintenance", position: { "x": 160, "y": 4180 } },
    scr_t01gpl: { name: "Locations", route: "/#locations", position: { "x": 1560, "y": 4180 } },
    scr_80xlhb: { name: "Users & Access", route: "/#users", position: { "x": 2960, "y": 4180 } },
    scr_69aenb: { name: "Analytics", route: "/#analytics", position: { "x": 4360, "y": 4180 } },
    scr_129t2b: { name: "Industries", route: "/#industries", position: { "x": 160, "y": 6160 } },
    scr_92e4t2: { name: "System Architecture", route: "/#architecture", position: { "x": 1560, "y": 6160 } },
    scr_etyjdg: { name: "Data Model", route: "/#data-model", position: { "x": 2960, "y": 6160 } },
    scr_xrurxu: { name: "Security", route: "/#security", position: { "x": 160, "y": 8140 } },
    scr_i67kiv: { name: "Expected Outcomes", route: "/#outcomes", position: { "x": 160, "y": 10120 } },
    scr_wen6c6: { name: "Final CTA", route: "/#cta", position: { "x": 1560, "y": 10120 } }
  },
  sections: {
    sec_575w2l: { name: "Hero & Value Prop", x: 0, y: 0, width: 4320, height: 1180 },
    sec_p1s2ts: { name: "Core Features", x: 0, y: 1980, width: 5720, height: 1180 },
    sec_oowuds: { name: "Administration & Operations", x: 0, y: 3960, width: 5720, height: 1180 },
    sec_eimuwv: { name: "Technical & Context", x: 0, y: 5940, width: 4320, height: 1180 },
    sec_sjvxzi: { name: "Trust & Security", x: 0, y: 7920, width: 1520, height: 1180 },
    sec_9ys4if: { name: "Outcomes & Conversion", x: 0, y: 9900, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_575w2l", children: [
    { kind: "screen", id: "scr_i88xdf" },
    { kind: "screen", id: "scr_gvfrt0" },
    { kind: "screen", id: "scr_urtl20" }]
  },
  { kind: "section", id: "sec_p1s2ts", children: [
    { kind: "screen", id: "scr_vse01s" },
    { kind: "screen", id: "scr_42ne7f" },
    { kind: "screen", id: "scr_vafboy" },
    { kind: "screen", id: "scr_d6bzjg" }]
  },
  { kind: "section", id: "sec_oowuds", children: [
    { kind: "screen", id: "scr_07jrrc" },
    { kind: "screen", id: "scr_t01gpl" },
    { kind: "screen", id: "scr_80xlhb" },
    { kind: "screen", id: "scr_69aenb" }]
  },
  { kind: "section", id: "sec_eimuwv", children: [
    { kind: "screen", id: "scr_129t2b" },
    { kind: "screen", id: "scr_92e4t2" },
    { kind: "screen", id: "scr_etyjdg" }]
  },
  { kind: "section", id: "sec_sjvxzi", children: [
    { kind: "screen", id: "scr_xrurxu" }]
  },
  { kind: "section", id: "sec_9ys4if", children: [
    { kind: "screen", id: "scr_i67kiv" },
    { kind: "screen", id: "scr_wen6c6" }]
  }]

};