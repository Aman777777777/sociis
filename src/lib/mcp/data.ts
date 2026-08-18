/**
 * Public institutional reference data exposed through the MCP server.
 * Everything here is already published on the public website.
 */

export type PersonGroup = "leadership" | "contributors" | "council";

export interface Person {
  name: string;
  role: string;
  group: PersonGroup;
}

export const PEOPLE: readonly Person[] = [
  { name: "Jeremie Landweer", role: "Founder & CEO", group: "leadership" },
  { name: "Dominique Debecker", role: "Chief Behavioural Officer", group: "leadership" },
  { name: "Luc Garguet-Duport", role: "Chief Operating Officer", group: "leadership" },
  { name: "Chris Benardis", role: "Chief Financial Officer", group: "leadership" },

  { name: "Richard Thommeret", role: "External Relations & Strategic Communications", group: "contributors" },
  { name: "Joost Peeters", role: "Legal Advisor", group: "contributors" },
  { name: "Micael Craenhals", role: "Production", group: "contributors" },
  { name: "Karim Tousbih", role: "Value Development", group: "contributors" },
  { name: "Sandrine Helinckx", role: "SBS Foundation", group: "contributors" },
  { name: "Prof. Jan de Visch", role: "SBS Foundation", group: "contributors" },
  { name: "Olivier Begerem", role: "AI & IT Strategy", group: "contributors" },

  { name: "Sarah McArthur", role: "Editor-in-Chief, Leader to Leader Journal", group: "council" },
  { name: "Tim Sanders", role: "Founder & CEO, Silent Donor", group: "council" },
  { name: "Lars Carlstrom", role: "Founder & CEO, Statetron", group: "council" },
];

export type PlaceStatus = "home" | "confirmed" | "candidate";

export interface Place {
  city: string;
  country: string;
  house: string;
  stewardship: string;
  note: string;
  wave: string;
  status: PlaceStatus;
}

export const PLACES: readonly Place[] = [
  { city: "Brussels", country: "Belgium", house: "Corinthia Grand Astoria", stewardship: "Independent", note: "The 64, the founding gathering", wave: "Home", status: "home" },
  { city: "Boom", country: "Belgium", house: "Tomorrowland grounds", stewardship: "With Love Tomorrow", note: "The 300, Shape Tomorrow Today", wave: "Home", status: "home" },
  { city: "London", country: "United Kingdom", house: "The Lanesborough", stewardship: "Oetker Collection", note: "Family owned, capital and culture", wave: "Year One", status: "confirmed" },
  { city: "Cape Town", country: "South Africa", house: "Mount Nelson", stewardship: "Belmond / LVMH", note: "Africa and the Global South", wave: "Year One", status: "confirmed" },
  { city: "Madrid", country: "Spain", house: "", stewardship: "", note: "Europe", wave: "Year One", status: "candidate" },
  { city: "Geneva", country: "Switzerland", house: "Beau-Rivage", stewardship: "Independent, one family since 1865", note: "Institutions and diplomacy", wave: "Year Two", status: "confirmed" },
  { city: "Paris", country: "France", house: "Le Bristol", stewardship: "Oetker Collection", note: "Family owned", wave: "Year Two", status: "confirmed" },
  { city: "New York", country: "United States", house: "The Carlyle", stewardship: "Rosewood, Cheng family", note: "Finance, media, the United Nations", wave: "Year Two", status: "confirmed" },
  { city: "Singapore", country: "Singapore", house: "Capella", stewardship: "Pontiac, Kwee family", note: "The gateway to Asia", wave: "Year Three", status: "confirmed" },
  { city: "Tokyo", country: "Japan", house: "Palace Hotel", stewardship: "Independent, diligence pending", note: "Japan", wave: "Year Three", status: "confirmed" },
  { city: "Mumbai", country: "India", house: "The Taj Mahal Palace", stewardship: "Tata", note: "The largest democracy", wave: "Years Four to Five", status: "confirmed" },
  { city: "Sydney", country: "Australia", house: "Capella", stewardship: "Pontiac, Kwee family", note: "Asia-Pacific anchor", wave: "Years Four to Five", status: "confirmed" },
  { city: "Monaco", country: "Monaco", house: "Hôtel de Paris", stewardship: "Monte-Carlo SBM", note: "European depth", wave: "Years Four to Five", status: "confirmed" },
  { city: "Antibes", country: "France", house: "Hôtel du Cap-Eden-Roc", stewardship: "Oetker Collection", note: "European depth", wave: "Years Four to Five", status: "confirmed" },
  { city: "Baden-Baden", country: "Germany", house: "Brenners Park-Hotel", stewardship: "Oetker Collection", note: "European depth", wave: "Years Four to Five", status: "confirmed" },
  { city: "Rome", country: "Italy", house: "Orient Express La Minerva", stewardship: "Accor + LVMH", note: "European depth, plus the train", wave: "Years Four to Five", status: "confirmed" },
  { city: "Venice", country: "Italy", house: "Hotel Cipriani", stewardship: "Belmond / LVMH", note: "European depth", wave: "Years Four to Five", status: "confirmed" },
  { city: "Los Angeles", country: "United States", house: "", stewardship: "", note: "North America", wave: "Future wave", status: "candidate" },
  { city: "Mexico City", country: "Mexico", house: "", stewardship: "", note: "North America", wave: "Future wave", status: "candidate" },
  { city: "Buenos Aires", country: "Argentina", house: "", stewardship: "", note: "South America", wave: "Future wave", status: "candidate" },
  { city: "Rio de Janeiro", country: "Brazil", house: "", stewardship: "", note: "South America", wave: "Future wave", status: "candidate" },
  { city: "Marrakech", country: "Morocco", house: "", stewardship: "", note: "North Africa", wave: "Future wave", status: "candidate" },
  { city: "Nairobi", country: "Kenya", house: "", stewardship: "", note: "East Africa", wave: "Future wave", status: "candidate" },
  { city: "Bangkok", country: "Thailand", house: "", stewardship: "", note: "South-East Asia", wave: "Future wave", status: "candidate" },
  { city: "Seoul", country: "South Korea", house: "", stewardship: "", note: "East Asia", wave: "Future wave", status: "candidate" },
];

export interface Experience {
  slug: string;
  name: string;
  summary: string;
  place: string;
  page: string;
  deck: string;
}

export const EXPERIENCES: readonly Experience[] = [
  {
    slug: "the-64",
    name: "The 64",
    summary: "The founding gathering. Sixty-four individuals in one room, the smallest scale at which the Standard can be set.",
    place: "Brussels, Belgium",
    page: "/the64.html",
    deck: "/the-64-deck.pptx",
  },
  {
    slug: "the-300",
    name: "The 300",
    summary: "Shape Tomorrow Today. Three hundred individuals convened on the Tomorrowland grounds, behaviour in motion at wider scale.",
    place: "Boom, Belgium",
    page: "/the300.html",
    deck: "/the-300-deck.pptx",
  },
];

export interface SiteSection {
  slug: string;
  title: string;
  body: string;
}

export const SECTIONS: readonly SiteSection[] = [
  {
    slug: "overview",
    title: "SociisGroup",
    body: "SociisGroup is a sovereign independent benefit corporation based in Brussels, Belgium. It builds behavioural infrastructure for institutions, on the premise that institutions are individuals and institutions are communities, and that outcomes follow behaviour before they follow numbers.",
  },
  {
    slug: "impact",
    title: "Sociis Impact",
    body: "SBS and BEE are behavioural infrastructure, not reporting products. The Sustainable Behaviour Standard defines what sustainable behaviour is at the level of the individual and the institution. The Behavioural Engine with Ethics turns that standard into decisions that can be observed, held and repeated.",
  },
  {
    slug: "culture",
    title: "Sociis Culture",
    body: "Culture is how SociisGroup reaches one billion individuals for higher sustainability standards. The Rooms gather hundreds. Culture reaches the orders of magnitude the Standard requires. It moves faster than governance and reaches further than boardrooms. Most institutions use culture as marketing. SociisGroup holds every cultural object it produces to the LIME Code that governs the institution itself.",
  },
  {
    slug: "lime-code",
    title: "The LIME Code",
    body: "The LIME Code frames inner conduct and the use of power. It governs the institution itself before it is asked of anyone else, and every cultural object, gathering and decision is held to it.",
  },
  {
    slug: "governance",
    title: "Governance",
    body: "SociisGroup is governed through a defined institutional structure. Authority, oversight and executive responsibility are intentionally separated to safeguard independence, integrity and long-term trust.",
  },
  {
    slug: "house",
    title: "Sociis House",
    body: "Sociis House is behaviour in motion, the environment where the Standard is practised rather than described. It is reached at https://www.sociis.house/.",
  },
  {
    slug: "access",
    title: "Access",
    body: "Access is by manual selection, without forms. If the institution resonates, the correspondence address is hello@sociisgroup.com.",
  },
  {
    slug: "places",
    title: "Places",
    body: "Home is in Belgium. From there the institution moves across the world, one city at a time, each house a clean, mostly family owned grande dame, one per city, every one screened by the Venue and Place Standard. Houses named are screened candidates, confirmed in writing before any public use.",
  },
];
