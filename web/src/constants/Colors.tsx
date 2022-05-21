interface Colour {
  label: string;
  value: string;
}

interface ThemeColour {
  Base: Colour;
  Primary: Colour;
  PrimaryText: Colour;
  SubtitleText: Colour;
  Emphasis: Colour;
}

export const TagColours: Array<Colour> = [
    { label: "Coral Red", value: "#F94144" },
    { label: "Tangelo", value: "#F3722C" },
    { label: "Beer", value: "#F8961E" },
    { label: "Mango", value: "#F9844A" },
    { label: "Maize", value: "#F9C74F" }, // Crayola """own""" this colour. I do not care.
    { label: "Pistachio", value: "#90BE6D" },
    { label: "Zomp", value: "#43AA8B" },
    { label: "Steel Teal", value: "#4D908E" },
    { label: "UCLA Blue", value: "#577590" },
    { label: "Lapis Lazuli", value: "#277DA1" }
  ]

export const ThemeColours: Record<string, ThemeColour> = {
  "Seafoam Dark": {
    Base: { label: "Jet", value: "#353535" },
    Primary: { label: "Ming", value: "#3C6E71" },
    PrimaryText: { label: "White", value: "#FFFFFF" },
    SubtitleText: { label: "Light Silver", value: "#D9D9D9" },
    Emphasis: { label: "Police Blue", value: "#634028" }
  },

  // Join the Rose Pine movement! https://rosepinetheme.com/
  "Rose Pine Light": {
    Base: { label: "Seashell", value: "#FAF4ED" },
    Primary: { label: "NY Pink", value: "#D7827E" },
    PrimaryText: { label: "Purple Navy", value: "#575379" },
    SubtitleText: { label: "Manatee", value: "#9893A5" },
    Emphasis: { label: "Rose Gold", value: "#B4637A"}
  }
}