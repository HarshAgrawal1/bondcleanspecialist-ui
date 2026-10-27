export type BlogSection = { heading?: string; paras: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bond-clean-checklist",
    title: "Bond clean checklist before inspection day",
    excerpt: "A practical list of the rooms and details agents usually check when you hand the keys back.",
    date: "2026-03-12",
    sections: [
      {
        paras: [
          "A bond clean is about presenting the rental ready for inspection — not a quick tidy of what you can see from the doorway. Across Brisbane and the Gold Coast, agents and owners typically work through a consistent set of rooms and detail points. Knowing that list helps you prepare access and decide what belongs in your quote.",
        ],
      },
      {
        heading: "Kitchen and appliances",
        paras: [
          "Kitchens draw the most attention. Expect checks on benchtops, splashbacks, the cooktop, rangehood filters, and the inside of the oven, grill and cooktop trays. Empty the fridge and freezer if they are included, wipe door seals, and leave cupboards clear so shelves and hinges can be reached.",
          "Bins, under-sink cupboards and the floor edges around kickboards are easy to miss when belongings are still in place. Getting items out of those zones is one of the biggest helps you can give before the team arrives.",
        ],
      },
      {
        heading: "Bathrooms and wet areas",
        paras: [
          "Bathrooms are checked for soap scum, mould marks, grout, shower screens, tapware and mirrors. Toilet bases, vanity drawers and exhaust fans often sit on the same list. Leave vanity cupboards empty where you can so the cleaner can work through the full wet-area scope.",
        ],
      },
      {
        heading: "Floors, tracks and skirtings",
        paras: [
          "Window tracks, sliding-door channels, skirtings and corners collect dust that shows clearly in daylight. Floors need a clear path — furniture and boxes still in rooms slow the job and can leave areas unfinished relative to the quote.",
          "If carpets or specialised stain work are part of the booking, tell us the rooms and any known marks when you enquire so the quote matches the work.",
        ],
      },
      {
        heading: "Access and follow-up",
        paras: [
          "Arrange keys or vacant access, leave power and water on, and note parking, pets or alarms when you request a quote. After the visit, if something we cleaned is flagged and the miss is ours, we arrange a reclean. Work that was never in the original quote is discussed separately before it continues.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-for-movers",
    title: "How to prepare your place for the cleaners",
    excerpt: "Simple steps that help the team reach every surface included in your quote.",
    date: "2026-02-28",
    sections: [
      {
        paras: [
          "You do not need to pre-clean the property before Bond Clean Specialist arrives. Preparation is mostly about access, safety notes and clear information so the booked time goes into cleaning — not moving furniture or waiting on keys.",
        ],
      },
      {
        heading: "Clear the path",
        paras: [
          "Move belongings out of cupboards, wardrobes, fridge, oven and wet areas where the clean is included. Leave walkways open enough for equipment. If the property is still partly furnished, tell us in advance so we can plan time and price around what can actually be reached.",
          "Empty bins and remove rubbish so the visit is spent on surfaces, not clearing clutter. Soft furnishings you want left untouched should be set aside or labelled.",
        ],
      },
      {
        heading: "Keys, power and water",
        paras: [
          "Confirm who will provide access: you, an agent, a lockbox or vacant entry. Same-day access changes are harder to keep, so lock in the arrangement when you accept the quote.",
          "Leave power and water connected for the visit. Many detailed tasks — ovens, wet areas, steam work — need both. If either will be off, tell us early so we can advise what is realistic.",
        ],
      },
      {
        heading: "Spring cleans and priorities",
        paras: [
          "Spring cleaning is usually charged by the hour. List the rooms and tasks you want done first so the booked hours match your priorities. Extra appliances or a much heavier condition than described may need a revised time or price before we continue.",
        ],
      },
      {
        heading: "Things worth flagging",
        paras: [
          "Mention pets, parking limits, alarm codes, fragile items, wet paint or anything that needs extra care. Those notes keep the visit smooth and reduce surprises on the day. If you are unsure what to prepare, call 0422 555 984 and we will walk through it with you.",
        ],
      },
    ],
  },
  {
    slug: "bond-vs-spring-cleaning",
    title: "Bond cleaning vs spring cleaning — what is the difference?",
    excerpt: "When you need an end-of-lease clean, and when an hourly spring clean is the better fit.",
    date: "2026-01-20",
    sections: [
      {
        paras: [
          "People often use “bond clean” and “spring clean” as if they mean the same thing. For Bond Clean Specialist across Brisbane and the Gold Coast, the goals and pricing work differently — which one you book depends on whether you are handing back a rental or refreshing a home you still live in.",
        ],
      },
      {
        heading: "Bond cleaning",
        paras: [
          "Bond cleaning (end of lease) is a detailed clean aimed at inspection standards. It usually covers kitchens, bathrooms, living areas, bedrooms and floors, with attention to tracks, skirtings and appliances that agents check closely.",
          "Quotes are based on the property type, condition, suburb and inclusions you confirm with us. The job is scoped before we start so you know what is covered. Reclean support applies where something we cleaned is flagged and the miss is ours — not for wear and tear or work outside the quote.",
        ],
      },
      {
        heading: "Spring cleaning",
        paras: [
          "Spring cleaning is more flexible. It is typically charged by the hour, so you choose how much time to book and which rooms matter most. It suits occupied homes, a deep refresh before guests, or catching up on areas that have drifted over the year.",
          "Because time is limited to the hours booked, a clear priority list helps. Cupboards, ovens or wet areas that need extra attention should be called out when you quote so expectations match the schedule.",
        ],
      },
      {
        heading: "Extras that sit with either",
        paras: [
          "Oven and BBQ cleans, carpet steam cleaning and some specialised tasks can sit with a bond clean, a spring clean, or run as their own visit. Tell us the rooms and any stains or grease build-up so the quote is honest.",
        ],
      },
      {
        heading: "Which should you book?",
        paras: [
          "Handing back keys after a tenancy? Start with bond cleaning and list any extras you need. Still living in the home and want a thorough refresh on your terms? Spring cleaning is usually the better fit.",
          "If you are unsure, send the suburb, property type and what you want finished — we will come back with a clear recommendation and quote. Call 0422 555 984 or use the quote form on the site.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
