#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parent

SERVICES = [
    {
        "slug": "bond-cleaning",
        "name": "Bond cleaning",
        "short": "End of lease cleaning",
        "img": "svc-bond.png",
        "h1": "Bond cleaning that covers the inspection detail.",
        "intro": "Moving out of a rental? Our bond cleaning is a detailed end-of-lease clean designed around the areas agents commonly check — kitchens, bathrooms, floors, tracks and the oven — so you can hand the keys back without spending your last days scrubbing.",
        "body": [
            "We work through vacant houses, units and townhouses across Brisbane and the Gold Coast. The quote is based on the property in front of us, not a one-size package that leaves extras to guesswork.",
            "Cleaning can include kitchens and bathrooms, cooktop and rangehood, cupboards and drawers, bedrooms and living areas, skirting boards, doors and frames, floors, accessible internal windows, tracks and sills, and the oven.",
            "If something we cleaned is flagged after the job, send us the inspection notes. Where the miss is ours, we will arrange a reclean.",
        ],
        "why": [
            ("Detailed, not rushed", "We work through the property methodically so tracks, skirtings and corners get the same care as benchtops."),
            ("Clear quote first", "You know what is included before we start. The price is based on your layout, not a surprise on the day."),
            ("Built for move-out", "The job is organised around handover, vacant access and the rooms an inspection usually covers."),
        ],
        "faqs": [
            ("What is bond cleaning?", "Bond cleaning, also called end of lease cleaning, is a detailed clean of a rental when a tenant moves out. It is designed to cover areas typically checked at inspection."),
            ("What does it include?", "Kitchens, bathrooms, bedrooms, living areas and floors, including skirting boards, window tracks and oven cleaning. Exact inclusions depend on the property and your quote."),
            ("Do I need to be moved out?", "It helps to have belongings out so we can reach every surface. Tell us if some furniture will still be there."),
            ("How do I get a price?", "Request a quote with the property type, bedrooms, suburb and preferred date, or call 1300 555 014."),
        ],
    },
    {
        "slug": "carpet-steam-cleaning",
        "name": "Carpet steam cleaning",
        "short": "Fresh, clean carpets",
        "img": "svc-carpet.png",
        "h1": "Carpet steam cleaning that lifts the dull, not just the surface.",
        "intro": "Professional extraction cleaning for homes, rentals, offices and Airbnb stays. We use professional equipment to pull out accumulated dirt and leave carpets looking and smelling fresher.",
        "body": [
            "Tell us the rooms, any stains and whether the carpets sit with a bond clean or as their own visit so the quote matches the work.",
            "Stain-removal results depend on the carpet material, age, condition and type of staining. We are upfront about that when we quote.",
            "Suitable for houses, units, investment properties and commercial floor areas that need a proper extraction, not a quick spray.",
        ],
        "why": [
            ("Extraction, not a wipe", "Steam extraction is aimed at dirt sitting in the pile, not just the look of a surface tidy."),
            ("Quoted to the rooms", "You tell us how many rooms and any problem areas. We do not hide extras in the fine print."),
            ("Fits around other work", "Carpets can sit with a bond clean or be booked on their own — we organise the sequence with you."),
        ],
        "faqs": [
            ("Do you steam-clean carpets?", "Yes. Carpet steam cleaning is a listed service. Tell us the rooms and any stains when you enquire."),
            ("How long until we can walk on them?", "Timing depends on the carpet and airflow. We confirm drying notes with your booking."),
            ("Can carpets be added to a bond clean?", "Yes. Ask when you request the quote so both jobs are planned together."),
            ("Will every stain come out?", "It depends on the fibre, age and stain type. We discuss realistic results before we start."),
        ],
    },
    {
        "slug": "spring-cleaning",
        "name": "Spring cleaning",
        "short": "Flexible hourly-rate cleaning",
        "img": "svc-spring.png",
        "h1": "Spring cleaning charged by the hour, directed by you.",
        "intro": "Spring cleaning is billed at an hourly rate so you choose how much time you need and which rooms to prioritise — a reset when a regular tidy is no longer enough.",
        "body": [
            "Unlike package services, you set the hours and the order of rooms. Our team works through your list during the booked time.",
            "Cleaning can include kitchens, bathrooms, dusting and wiping, bedrooms and living areas, vacuuming and mopping, skirtings, doors and frames, and accessible windows and tracks.",
            "Final cost depends on hours, how many cleaners, property condition and the tasks you request. Ovens, carpets and other specialised extras are quoted separately.",
        ],
        "why": [
            ("You set the hours", "Pay for the time you actually want, instead of a fixed package that may not match the house."),
            ("Priority rooms first", "Tell us what matters most. We start there so the booked time is not wasted on the wrong list."),
            ("Easy to book", "Share the suburb, a rough hour count and a date. We confirm a clear hourly quote."),
        ],
        "faqs": [
            ("Is spring cleaning hourly?", "Yes. It is charged at an hourly rate so you can choose how much time you need."),
            ("What if we run out of time?", "Completion depends on the hours booked and the condition of the property. Give us your priority rooms when you book."),
            ("Can I add an oven or carpets?", "Yes. Those are specialised extras and are quoted separately from the hourly clean."),
            ("Who is it for?", "Homeowners and tenants who want a deeper refresh than a weekly tidy, without a full bond-clean package."),
        ],
    },
    {
        "slug": "pest-control",
        "name": "Pest control & flea treatment",
        "short": "Homes and rentals",
        "img": "svc-pest.png",
        "h1": "Pest control and flea treatment tailored to the property.",
        "intro": "Treatment for homes, rentals and end-of-lease jobs where pests or fleas need handling before the next occupant moves in.",
        "body": [
            "We inspect first, then treat the rooms that need it. Preparation notes and any follow-up sit with the quote so you know what to expect.",
            "Suitable for houses, investment properties, pet properties and move-out requirements.",
            "Tell us what you have seen and which rooms are affected so the visit is planned properly.",
        ],
        "why": [
            ("Inspect, then treat", "We do not guess the rooms. The visit is based on what the property actually needs."),
            ("Works with move-out", "Pest and flea treatment can sit alongside a bond clean when a rental is turning over."),
            ("Clear next steps", "Preparation and follow-up are explained with the quote, not after the technician has left."),
        ],
        "faqs": [
            ("Do you treat fleas?", "Yes. Flea treatment is part of this service. Mention pets and which rooms are affected when you enquire."),
            ("Do I need to leave the property?", "It depends on the treatment. We confirm access and re-entry notes with your booking."),
            ("Can this be booked with a bond clean?", "Yes. Ask us to quote both so the sequence is organised."),
            ("How soon can you come?", "Tell us the suburb and preferred date. We will confirm what we can book."),
        ],
    },
    {
        "slug": "oven-bbq-cleaning",
        "name": "Oven & BBQ cleaning",
        "short": "Remove grease. Restore shine.",
        "img": "svc-oven.png",
        "h1": "Oven and BBQ cleaning that breaks down the baked-on grease.",
        "intro": "Detailed cleaning for ovens and barbecues — racks, trays, glass and hotplates — either with a bond clean or as its own visit.",
        "body": [
            "Grease and carbon build-up are the jobs most people put off. We take the appliance apart as far as a standard clean allows and restore a presentable finish.",
            "Depending on the appliance, work can include internal surfaces, racks, trays, doors, glass and accessible exteriors.",
            "Useful for rentals at handover, family kitchens and outdoor BBQs that have been left too long.",
        ],
        "why": [
            ("Built-up grease is the job", "We focus on the interior that a wipe never reaches, not just the door glass."),
            ("Booked on its own or with a bond clean", "Add it to a move-out clean or book a dedicated oven and BBQ visit."),
            ("Quoted before we start", "Tell us single, double or BBQ so the quote matches the appliance."),
        ],
        "faqs": [
            ("Do you clean BBQs as well as ovens?", "Yes. Oven and BBQ cleaning can sit together or run as separate visits."),
            ("Do I need to empty the oven?", "Remove cookware before we arrive. Trays and racks that belong to the oven can stay."),
            ("Can this be added to a bond clean?", "Yes. Mention it on the quote form so it is included in the price."),
            ("What about rangehoods?", "Ask when you enquire. Accessible exteriors and filters can be discussed with the quote."),
        ],
    },
    {
        "slug": "airbnb-cleaning",
        "name": "Airbnb cleaning",
        "short": "Guest ready, every time",
        "img": "svc-airbnb.png",
        "h1": "Airbnb cleaning that turns the property around between guests.",
        "intro": "Turnover cleaning for hosts and property managers who need the stay to look ready — not recently vacated — before the next check-in.",
        "body": [
            "We work through bedrooms, bathrooms, kitchens, living areas, floors and surfaces to a consistent standard you can repeat.",
            "One-off or recurring turnarounds can be organised around your booking calendar.",
            "Tell us linen, consumables and any extra tasks when you quote so the visit matches how you host.",
        ],
        "why": [
            ("Built for turnarounds", "The clean is paced for guest changeover, not a once-a-year deep reset."),
            ("Same rooms, same standard", "Hosts need consistency. We work a repeatable list so each stay starts the same way."),
            ("Flexible roster", "One-off or recurring — we confirm the timetable when we quote."),
        ],
        "faqs": [
            ("Do you work to check-in times?", "Tell us the turnover window when you enquire. We organise the visit around guest times where we can."),
            ("Is linen included?", "Linen handling depends on what you request. Add it to the quote so it is costed."),
            ("Can I book every changeover?", "Yes. Recurring Airbnb cleaning can be discussed after the first visit."),
            ("What areas do you cover?", "Brisbane and the Gold Coast. If the suburb is listed, we can usually quote."),
        ],
    },
    {
        "slug": "deep-cleaning",
        "name": "Deep cleaning",
        "short": "When regular cleaning is not enough",
        "img": "svc-deep.png",
        "h1": "Deep cleaning for properties that need more than a tidy.",
        "intro": "A heavier clean when dirt, grease and neglect have built up — houses, apartments, pre-event resets and homes that have not had a professional visit in a long time.",
        "body": [
            "The work is customised to size, condition and the rooms you want pushed harder than a spring clean hour count.",
            "Ideal before guests, after a long gap between cleans, or when a property needs a proper reset.",
            "We quote after we understand the condition so the time on site matches the job.",
        ],
        "why": [
            ("Condition first", "A deep clean is quoted to how the property actually looks, not a generic room count alone."),
            ("Detail that a weekly tidy skips", "Skirtings, tracks, neglected wet areas and built-up kitchen grease are the point of the visit."),
            ("Clear scope", "You will know which rooms and tasks are in before we arrive."),
        ],
        "faqs": [
            ("How is this different from spring cleaning?", "Spring cleaning is hourly and directed by you. Deep cleaning is quoted as a fuller reset based on condition."),
            ("Do I need to be home?", "Not always. Tell us about access and pets when you enquire."),
            ("Can I combine it with carpets or the oven?", "Yes. Ask for those extras on the same quote."),
            ("How long does it take?", "It depends on size and condition. We confirm timing with the quote."),
        ],
    },
    {
        "slug": "builder-cleaning",
        "name": "Builder cleaning",
        "short": "Post-construction cleaning",
        "img": "svc-builder.png",
        "h1": "Builder cleaning after the tools leave.",
        "intro": "Post-construction and renovation cleaning to get dust off surfaces and present the property for inspection, handover, sale or move-in.",
        "body": [
            "We can assist with construction dust and general building residue on suitable surfaces.",
            "Suitable for builders, developers, contractors, homeowners and property managers.",
            "Tell us the stage of works and which areas are ready so the visit is not booked too early.",
        ],
        "why": [
            ("Dust is a different job", "Builder cleans are about construction residue, not a standard house tidy."),
            ("Handover-ready presentation", "The aim is a space you can inspect, photograph or occupy without a film of dust."),
            ("Quoted to the site", "New builds and renovations vary. We quote after we know the size and stage."),
        ],
        "faqs": [
            ("When should we book?", "When trades are largely finished and the property can be accessed without wet paint or active cutting."),
            ("Do you clean windows?", "Accessible internal glass can be included. Confirm heights and extras on the quote."),
            ("Is this the same as a bond clean?", "No. Builder cleaning is for post-construction dust. Bond cleaning is an end-of-lease inspection clean."),
            ("Who can book?", "Builders, owners and property managers — whoever is organising handover."),
        ],
    },
    {
        "slug": "upholstery-cleaning",
        "name": "Upholstery cleaning",
        "short": "Refresh your furniture",
        "img": "svc-upholstery.png",
        "h1": "Upholstery cleaning for sofas, chairs and fabric furniture.",
        "intro": "Extraction cleaning to lift dirt from suitable fabric furniture and leave it looking and smelling fresher.",
        "body": [
            "The material and condition should be assessed before cleaning so the method matches the fabric.",
            "Useful in family homes, rentals and offices where sofas take daily wear.",
            "Tell us how many seats and the fabric type if you know it so the quote is realistic.",
        ],
        "why": [
            ("Fabric first", "We check what the piece can take before we start, instead of using one method on every sofa."),
            ("Fresher, not just vacuumed", "Extraction is aimed at dirt sitting in the fabric, not only the surface dust."),
            ("Add it to a house clean", "Upholstery can be quoted with a spring or deep clean, or booked on its own."),
        ],
        "faqs": [
            ("Do you clean leather?", "Ask when you enquire. Method depends on the material. We will tell you if a piece is not suitable."),
            ("How long until we can sit on it?", "Drying time depends on fabric and airflow. We confirm that with the booking."),
            ("Can you treat stains?", "Results depend on the stain and fibre. We discuss what is realistic first."),
            ("How is it priced?", "Usually by the piece or seat. Send photos or a count when you request a quote."),
        ],
    },
    {
        "slug": "pressure-washing",
        "name": "Pressure washing",
        "short": "Outdoor surfaces, restored",
        "img": "svc-pressure.png",
        "h1": "Pressure washing for driveways, paths and outdoor surfaces.",
        "intro": "Restore concrete, paths, patios and selected exterior surfaces by removing dirt, grime and organic build-up.",
        "body": [
            "Ideal for driveways, pathways, concrete areas and patios that have gone grey or slippery.",
            "We quote after we know the surface type and size so the pressure is suitable.",
            "Outdoor work depends on water access and weather. We confirm that when we book.",
        ],
        "why": [
            ("Outside needs different kit", "Pressure washing is not a mop. We bring the equipment for exterior surfaces."),
            ("Quoted to the area", "A short path is not a full driveway. The quote follows the square metres in front of us."),
            ("Pairs with a house clean", "Book it with a bond or spring clean, or as its own outdoor visit."),
        ],
        "faqs": [
            ("What surfaces can you wash?", "Driveways, paths, concrete and selected patios. Tell us the surface when you enquire."),
            ("Do I need to supply water?", "We confirm water access with the booking."),
            ("Will it mark the concrete?", "We match pressure to the surface. Flag any known damage before we start."),
            ("Do you do roofs or heights?", "This service is for accessible outdoor surfaces. Heights and specialist work are not assumed in a standard quote."),
        ],
    },
    {
        "slug": "gym-cleaning",
        "name": "Gym cleaning",
        "short": "A cleaner workout space",
        "img": "svc-gym.png",
        "h1": "Gym cleaning for floors, equipment and change rooms.",
        "intro": "Commercial cleaning for gyms that need a presentable floor, wiped equipment and bathrooms that keep up with member traffic.",
        "body": [
            "Cleaning can include equipment exteriors, floors, mirrors, reception, bathrooms, change rooms, common areas and high-touch surfaces.",
            "One-off or recurring commercial arrangements can be discussed.",
            "We work around your opening hours where we can so members are not walking through a wet floor at peak time.",
        ],
        "why": [
            ("High-touch is the brief", "Handles, benches and change rooms are treated as the job, not an afterthought."),
            ("Roster or one-off", "Fit-outs, reopenings and weekly cleans can all be quoted."),
            ("After-hours where needed", "Tell us when the floor is free. We organise the visit around trade."),
        ],
        "faqs": [
            ("Do you clean equipment?", "Yes, exteriors and high-touch surfaces as agreed in the quote."),
            ("Can you come after close?", "Often yes. Confirm hours when you request a quote."),
            ("Is this only for large gyms?", "No. Smaller studios and training rooms can be quoted too."),
            ("How do we start?", "Send the suburb, size and whether you need a one-off or a regular roster."),
        ],
    },
    {
        "slug": "office-cleaning",
        "name": "Office cleaning",
        "short": "One-off or recurring",
        "img": "svc-office.png",
        "h1": "Office cleaning that keeps the workplace presentable.",
        "intro": "One-off or recurring cleaning for offices — workstations, meeting rooms, kitchens, bathrooms and common areas.",
        "body": [
            "We provide flexible cleaning for workplaces that need a clear after-hours tidy or a one-off reset.",
            "Cleaning can include desks, reception, meeting rooms, kitchens, bathrooms, floors, common areas and high-touch surfaces.",
            "Tell us headcount, days required and access so the quote matches the site.",
        ],
        "why": [
            ("Quoted to the floorplate", "A small suite is not a whole level. The price follows the space and frequency."),
            ("After-hours friendly", "Most offices prefer the clean when staff have left. We plan around access."),
            ("One-off or weekly", "Fit-outs, end-of-lease offices and regular rosters are all in scope."),
        ],
        "faqs": [
            ("Do you clean kitchens and bathrooms?", "Yes, as part of a typical office clean. Confirm inclusions on the quote."),
            ("Can we book once only?", "Yes. One-off office cleans are available as well as recurring."),
            ("Do staff need to clear desks?", "A clear desk helps. Tell us how you work so we know what can be moved."),
            ("Which suburbs?", "Brisbane and the Gold Coast. Call 1300 555 014 if you sit just outside the list."),
        ],
    },
    {
        "slug": "hospitality-cleaning",
        "name": "Pub & hospitality cleaning",
        "short": "After-trade presentation",
        "img": "svc-hospitality.png",
        "h1": "Pub and hospitality cleaning after trade.",
        "intro": "Cleaning for pubs, restaurants, cafés and bars that need dining rooms, floors, bathrooms and bar areas ready for the next service.",
        "body": [
            "Schedules can be arranged around your operating hours so the venue is presented before open.",
            "Cleaning can include dining areas, floors, bathrooms, tables and surfaces, bar areas, entrances and other agreed spaces.",
            "One-off deep resets and regular after-trade visits can both be quoted.",
        ],
        "why": [
            ("Built around service times", "Hospitality cleans have to finish before doors open. We plan the visit around trade."),
            ("Front of house and amenities", "Floors, bathrooms and dining surfaces are the rooms guests notice first."),
            ("Venue-specific quote", "A café is not a late-night pub. The quote follows how you actually operate."),
        ],
        "faqs": [
            ("Can you clean after close?", "Yes. After-trade cleaning is the usual pattern. Confirm lock-up and alarm access when you book."),
            ("Do you do kitchens?", "Kitchen scope depends on the venue. Tell us what you need included."),
            ("One-off or regular?", "Both. Reopenings, events and weekly rosters can be quoted."),
            ("What should we prepare?", "Clear the worst of the floor waste if you can. We confirm a short prep list with the booking."),
        ],
    },
    {
        "slug": "retail-store-cleaning",
        "name": "Retail store cleaning",
        "short": "Ready before open",
        "img": "svc-retail.png",
        "h1": "Retail store cleaning before the doors open.",
        "intro": "Cleaning for shops, showrooms and customer-facing spaces that need floors, counters and fitting rooms looking ready.",
        "body": [
            "Work can include floors, counters, fitting rooms, mirrors, entrances, staff areas, bathrooms and high-touch surfaces.",
            "One-off and recurring arrangements are available around trading hours.",
            "Tell us the floor type and whether stock can be moved so the quote is accurate.",
        ],
        "why": [
            ("Customer-facing first", "Entrances, floors and counters are prioritised because that is what shoppers see."),
            ("Before-open timing", "We organise the clean so the store is dry and presentable at opening."),
            ("Quoted to the shop", "A boutique is not a large format floor. The visit matches the space."),
        ],
        "faqs": [
            ("Will you work around stock?", "Yes. Tell us what can be moved. We do not assume we can shift heavy fixtures."),
            ("Do you clean fitting rooms and bathrooms?", "Yes, when they are part of the agreed scope."),
            ("Can we have a weekly clean?", "Yes. Recurring retail cleaning can be quoted after we know the hours."),
            ("How do we get a price?", "Send the suburb, shop size and preferred time — before open or after close."),
        ],
    },
]

_PEST = next(s for s in SERVICES if s["slug"] == "pest-control")
SERVICES = [s for s in SERVICES if s["slug"] != "pest-control"] + [_PEST]

GC_AREAS = [
    "Ashmore", "Arundel", "Broadbeach", "Burleigh Heads", "Carrara", "Coomera",
    "Coombabah", "Coolangatta", "Elanora", "Helensvale", "Hope Island", "Labrador",
    "Main Beach", "Mermaid Beach", "Mermaid Waters", "Miami", "Nerang", "Ormeau",
    "Oxenford", "Palm Beach", "Pacific Pines", "Parkwood", "Paradise Point", "Pimpama",
    "Robina", "Runaway Bay", "Southport", "Surfers Paradise", "Tweed Heads",
    "Upper Coomera", "Varsity Lakes",
]
BNE_AREAS = [
    "Acacia Ridge", "Albion", "Alderley", "Algester", "Annerley", "Archerfield",
    "Ascot", "Ashgrove", "Aspley", "Auchenflower", "Bald Hills", "Balmoral",
    "Banyo", "Bardon", "Bellbowrie", "Belmont", "Boondall", "Bowen Hills",
    "Bracken Ridge", "Bridgeman Downs", "Brighton", "Brisbane City", "Brookfield",
    "Bulimba", "Calamvale", "Camp Hill", "Cannon Hill", "Carina", "Carina Heights",
    "Carindale", "Carseldine", "Chapel Hill", "Chelmer", "Chermside",
    "Chermside West", "Clayfield", "Coopers Plains", "Coorparoo", "Corinda",
    "Darra", "Deagon", "Doolandella", "Drewvale", "Durack", "Dutton Park",
    "Eagle Farm", "East Brisbane", "Eight Mile Plains", "Ellen Grove", "Enoggera",
    "Everton Park", "Fairfield", "Fig Tree Pocket", "Fitzgibbon", "Forest Lake",
    "Fortitude Valley", "Geebung", "Gordon Park", "Graceville", "Grange",
    "Greenslopes", "Gumdale", "Hamilton", "Hawthorne", "Heathwood", "Hemmant",
    "Hendra", "Highgate Hill", "Holland Park", "Holland Park West",
    "Indooroopilly", "Inala", "Jamboree Heights", "Jindalee", "Kangaroo Point",
    "Kedron", "Kelvin Grove", "Kenmore", "Kenmore Hills", "Kuraby", "Lutwyche",
    "Macgregor", "Manly", "Manly West", "Mansfield", "McDowall", "Middle Park",
    "Milton", "Mitchelton", "Moggill", "Moorooka", "Morningside", "Mount Gravatt",
    "Mount Gravatt East", "Mount Ommaney", "Murarrie", "Nathan", "New Farm",
    "Newmarket", "Newstead", "Northgate", "Nudgee", "Nundah", "Oxley",
    "Paddington", "Pallara", "Parkinson", "Petrie Terrace", "Pullenvale",
    "Red Hill", "Richlands", "Riverhills", "Robertson", "Rochedale", "Rocklea",
    "Runcorn", "Salisbury", "Sandgate", "Seventeen Mile Rocks", "Sherwood",
    "Sinnamon Park", "South Brisbane", "Spring Hill", "St Lucia", "Stafford",
    "Stafford Heights", "Stones Corner", "Sunnybank", "Sunnybank Hills",
    "Taigum", "Tarragindi", "Taringa", "Teneriffe", "The Gap", "Tingalpa",
    "Toowong", "Upper Mount Gravatt", "Virginia", "Wacol", "Wakerley",
    "Wavell Heights", "West End", "Westlake", "Wishart", "Woolloongabba",
    "Wooloowin", "Wynnum", "Wynnum West", "Yeerongpilly", "Yeronga", "Zillmere",
    "Bahrs Scrub", "Bannockburn", "Beenleigh", "Belivah", "Berrinba", "Bethania",
    "Boronia Heights", "Browns Plains", "Buccan", "Carbrook", "Cedar Creek",
    "Cedar Grove", "Cedar Vale", "Chambers Flat", "Cornubia", "Crestmead",
    "Daisy Hill", "Eagleby", "Edens Landing", "Flagstone", "Flinders Lakes",
    "Forestdale", "Greenbank", "Heritage Park", "Hillcrest", "Holmview",
    "Jimboomba", "Kagaru", "Kingston", "Logan Central", "Logan Reserve",
    "Logan Village", "Loganholme", "Loganlea", "Luscombe", "Marsden",
    "Meadowbrook", "Monarch Glen", "Mount Warren Park", "Mundoolun", "Munruben",
    "New Beith", "North Maclean", "Park Ridge", "Park Ridge South", "Priestdale",
    "Regents Park", "Rochedale South", "Shailer Park", "Slacks Creek",
    "South Maclean", "Springwood", "Stockleigh", "Tanah Merah", "Tamborine",
    "Underwood", "Veresdale", "Veresdale Scrub", "Waterford", "Waterford West",
    "Windaroo", "Wolffdene", "Woodhill", "Woodridge", "Yarrabilba",
]


def slugify(name):
    return name.lower().replace("&", "and").replace(" ", "-")


# Homepage suburb sample only — menus and areas.html use the full lists
NAV_BNE_SAMPLE = [
    "Annerley", "Ashgrove", "Chermside", "Clayfield", "Coorparoo", "Greenslopes",
    "Kangaroo Point", "Kedron", "Lutwyche", "Moorooka", "Mount Gravatt", "Nundah",
    "Spring Hill", "Sunnybank", "West End", "Woolloongabba",
]


def header(prefix, active):
    svc_links = "\n".join(
        f'              <a href="{prefix}services/{s["slug"]}.html">{s["name"]}</a>' for s in SERVICES
    )
    gc_links = "\n".join(
        f'              <a href="{prefix}areas/{slugify(n)}.html">{n}</a>' for n in GC_AREAS
    )
    bne_links = "\n".join(
        f'              <a href="{prefix}areas/{slugify(n)}.html">{n}</a>' for n in BNE_AREAS
    )
    def a(href, label, key):
        cls = ' class="active"' if active == key else ""
        return f'<a{cls} href="{prefix}{href}">{label}</a>'

    svc_on = ' class="active"' if active == "services" else ""
    areas_on = ' class="active"' if active == "areas" else ""

    return f'''    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="{prefix}index.html">
          <img src="{prefix}logo.png" alt="Bond Clean Specialist" />
        </a>
        <nav class="nav">
          {a("index.html", "Home", "home")}
          <div class="drop">
            <a{svc_on} href="{prefix}services.html">Services <span class="caret"></span></a>
            <div class="drop-list wide">
{svc_links}
            </div>
          </div>
          <div class="drop">
            <a{areas_on} href="{prefix}areas.html">Areas <span class="caret"></span></a>
            <div class="drop-list wide">
{gc_links}
{bne_links}
            </div>
          </div>
          {a("prices.html", "Prices", "prices")}
          {a("tips.html", "How to prepare", "tips")}
          {a("about.html", "About", "about")}
          {a("contact.html", "Contact", "contact")}
        </nav>
        <div class="header-actions">
          <button class="menu-btn" type="button" data-menu aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
          <a class="header-phone" href="tel:1300555014">1300 555 014</a>
          <button class="quote-open" type="button" data-open-quote>Get a quote</button>
        </div>
      </div>
      <div class="mobile-nav" data-mobile-nav>
        {a("index.html", "Home", "home")}
        <div class="mobile-drop">
          <div class="mobile-drop-head">
            <a{svc_on} href="{prefix}services.html">Services</a>
            <button type="button" data-mobile-drop aria-label="Open services list"><span class="caret"></span></button>
          </div>
          <div class="mobile-drop-list">
            {"".join(f'<a href="{prefix}services/{s["slug"]}.html">{s["name"]}</a>' for s in SERVICES)}
          </div>
        </div>
        <div class="mobile-drop">
          <div class="mobile-drop-head">
            <a{areas_on} href="{prefix}areas.html">Areas</a>
            <button type="button" data-mobile-drop aria-label="Open areas list"><span class="caret"></span></button>
          </div>
          <div class="mobile-drop-list">
            {"".join(f'<a href="{prefix}areas/{slugify(n)}.html">{n}</a>' for n in BNE_AREAS)}
            {"".join(f'<a href="{prefix}areas/{slugify(n)}.html">{n}</a>' for n in GC_AREAS)}
          </div>
        </div>
        {a("prices.html", "Prices", "prices")}
        {a("tips.html", "How to prepare", "tips")}
        {a("about.html", "About", "about")}
        {a("contact.html", "Contact", "contact")}
      </div>
    </header>'''


def footer(prefix):
    svc = "\n".join(
        f'            <a href="{prefix}services/{s["slug"]}.html">{s["name"]}</a>' for s in SERVICES
    )
    return f'''    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <a class="footer-brand" href="{prefix}index.html">
            <img class="footer-logo" src="{prefix}logo.png" alt="Bond Clean Specialist" />
          </a>
          <p>Professional bond, spring and oven cleaning across Brisbane and the Gold Coast.</p>
          <p class="abn-mark"><span>ABN</span> 12 345 678 901</p>
        </div>
        <div>
          <h3>Useful links</h3>
          <a href="{prefix}index.html">Home</a>
          <a href="{prefix}services.html">Services</a>
          <a href="{prefix}areas.html">Areas</a>
          <a href="{prefix}prices.html">Prices</a>
          <a href="{prefix}tips.html">How to prepare</a>
          <a href="{prefix}about.html">About</a>
          <a href="{prefix}contact.html">Contact</a>
        </div>
        <div>
          <h3>Services</h3>
          <div class="footer-service-links">
{svc}
          </div>
        </div>
        <div>
          <h3>Contact info</h3>
          <a href="tel:1300555014">1300 555 014</a>
          <a href="mailto:hello@bondcleanspecialist.com.au">hello@bondcleanspecialist.com.au</a>
          <a href="{prefix}areas.html">Brisbane and Gold Coast</a>
          <a href="{prefix}privacy.html">Privacy policy</a>
          <a href="{prefix}terms.html">Terms and conditions</a>
        </div>
      </div>
      <div class="wrap tiny">© 2026 Bond Clean Specialist. All rights reserved.</div>
    </footer>
    <button class="to-top" type="button" data-to-top aria-label="Back to top">↑</button>
    <div class="mobile-cta">
      <a href="tel:1300555014">Call us</a>
      <button type="button" data-open-quote>Request a free quote</button>
    </div>
    <div class="quote-layer" data-quote>
      <div class="quote-dim" data-close-quote></div>
      <aside class="quote-panel" role="dialog" aria-label="Request a free quote">
        <div class="quote-top">
          <h2>Get your free quote</h2>
          <button class="close-x" type="button" data-close-quote aria-label="Close">×</button>
        </div>
        <div class="success" data-success>
          <h3>Quote request sent</h3>
          <p>Bond Clean Specialist will get back to you with a quote.</p>
        </div>
        <form data-quote-form></form>
      </aside>
    </div>
    <script src="{prefix}js/main.js"></script>'''


def page(title, prefix, active, main):
    return f'''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{prefix}css/styles.css" />
    <link rel="icon" type="image/png" href="{prefix}favicon.png" />
  </head>
  <body>
{header(prefix, active)}
    <main>
{main}
    </main>
{footer(prefix)}
  </body>
</html>
'''


def stats_section(prefix):
    return f'''      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">Why locals book us</p>
            <h2>Happy clients. Reclean support. Local service.</h2>
          </div>
          <div class="stats-row">
            <article class="stat-card">
              <span class="stat-badge" aria-hidden="true">01</span>
              <h3>Happy clients</h3>
              <p>Tenants, homeowners and property teams across Brisbane and the Gold Coast.</p>
            </article>
            <article class="stat-card">
              <span class="stat-badge" aria-hidden="true">02</span>
              <h3>Guaranteed reclean</h3>
              <p>If something we cleaned is flagged and the miss is ours, we arrange a reclean.</p>
            </article>
            <article class="stat-card">
              <span class="stat-badge" aria-hidden="true">03</span>
              <h3>Local team</h3>
              <p>Brisbane and Gold Coast properties — quoted to the suburb and the layout.</p>
            </article>
            <article class="stat-card">
              <span class="stat-badge" aria-hidden="true">04</span>
              <h3>Clear quotes</h3>
              <p>You know what is included before we start. No guesswork on the day.</p>
            </article>
          </div>
        </div>
      </section>'''


def book_section(service_name):
    return f'''      <section class="section alt">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">How to book us</p>
            <h2>Three steps to book {service_name.lower()}.</h2>
          </div>
          <div class="book-steps">
            <article class="book-step">
              <span class="num">01</span>
              <h3>Request a quote</h3>
              <p>Tell us the suburb, property type and preferred date. Call 1300 555 014 or use the quote form.</p>
            </article>
            <article class="book-step">
              <span class="num">02</span>
              <h3>Confirm the visit</h3>
              <p>We send a clear quote. Once you accept, we lock in the time that works for the property.</p>
            </article>
            <article class="book-step">
              <span class="num">03</span>
              <h3>We handle the clean</h3>
              <p>The team works through the agreed list. If a miss on our side is flagged, we arrange a reclean.</p>
            </article>
          </div>
          <button class="btn btn-gold" type="button" data-open-quote>Get a free quote</button>
        </div>
      </section>'''


def why_section(items, variant=0):
    cards = []
    for i, (title, text) in enumerate(items):
        extra = " alt-card" if variant == 1 and i % 2 else ""
        cards.append(f'<article class="why-card{extra}"><h3>{title}</h3><p>{text}</p></article>')
    heading = [
        "Why choose us",
        "Why book Bond Clean Specialist",
        "What you can expect",
    ][variant % 3]
    return f'''      <section class="section{" moss" if variant == 2 else ""}">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">{heading}</p>
            <h2>{"A straightforward clean, quoted before we start." if variant != 1 else "Detail first, then a clear price." if variant == 1 else "Local cleaning organised around your handover."}</h2>
          </div>
          <div class="why-grid">
            {''.join(cards)}
          </div>
        </div>
      </section>'''


def faq_block(faqs):
    mid = (len(faqs) + 1) // 2
    def col(items):
        bits = []
        for q, a in items:
            bits.append(f"<details><summary>{q}</summary><p>{a}</p></details>")
        return '<div class="faq">' + "".join(bits) + "</div>"
    return f'''      <section class="section alt">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">Questions</p>
            <h2>Straight answers before you book.</h2>
          </div>
          <div class="faq-grid">
            {col(faqs[:mid])}
            {col(faqs[mid:])}
          </div>
        </div>
      </section>'''


def write(path, html):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(html, encoding="utf-8")
    print("wrote", path.relative_to(ROOT))


def index_page():
    tiles = []
    for s in SERVICES:
        tiles.append(
            f'''            <a class="photo-tile" href="services/{s["slug"]}.html">
              <img src="images/{s["img"]}" alt="{s["name"]}" />
              <div class="cap"><h3>{s["name"]}</h3><p>{s["short"]}</p></div>
            </a>'''
        )
    bne_links = "".join(
        f'<a href="areas/{slugify(n)}.html">{n}</a>' for n in NAV_BNE_SAMPLE
    )
    faqs = [
        ("What is bond cleaning?", "Bond cleaning, also known as end of lease cleaning, is a detailed clean of a rental property carried out when a tenant moves out. It is designed to cover the areas typically checked during a property inspection."),
        ("What does bond cleaning include?", "A bond clean generally covers the kitchen, bathrooms, bedrooms, living areas and floors, including detailed work like skirting boards, window tracks and oven cleaning. Exact inclusions can vary depending on the property."),
        ("Do you provide spring cleaning?", "Yes. Spring cleaning is charged at an hourly rate, so you can choose how much time you need and which rooms to prioritise. Specialised extras such as ovens or carpets can be quoted separately."),
        ("Can you clean ovens and barbecues?", "Yes. Oven and BBQ cleaning can sit with a bond clean or run as its own visit. We break down built-up grease on racks, trays, glass and hotplates."),
        ("Do you steam-clean carpets?", "Yes. Carpet steam cleaning is a listed service. Tell us the rooms and any stains when you enquire so the quote matches the work."),
        ("How can I request a quote?", "Get in touch with a few details about your property and the service you need, and we will provide a quote based on your specific requirements. Use the form on this page or call 1300 555 014."),
        ("How should I prepare for a bond clean?", "It helps to have the property empty of your belongings before we arrive, giving us clear access to every area that needs to be cleaned."),
        ("What areas do you service?", "Bond Clean Specialist works across the Gold Coast and Brisbane. If your suburb is not listed, call us and we will tell you whether we can book it."),
    ]
    mid = 4
    def faq_col(items):
        return '<div class="faq">' + "".join(f"<details><summary>{q}</summary><p>{a}</p></details>" for q, a in items) + "</div>"

    main = f'''      <section class="hero photo-hero">
        <div class="hero-bg">
          <video autoplay muted loop playsinline poster="images/hero-cleaner.png">
            <source src="videos/hero-clean.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="wrap hero-grid">
          <div class="hero-copy">
            <p class="hero-badge">Real estate standard Cleaning</p>
            <h1>Professional cleaning for a brighter space.</h1>
            <p class="lede">
              Residential and commercial cleaning across Brisbane and the Gold Coast.
            </p>
            <p class="lede">
              Moving is stressful enough. Let our team take care of the detailed
              cleaning so you can focus on moving forward — or keep the office,
              gym or shop looking ready for customers.
            </p>
            <ul class="trust-list">
              <li>Clear pricing and quotes</li>
              <li>Detailed cleaning</li>
              <li>Brisbane and Gold Coast</li>
              <li>Easy booking</li>
            </ul>
            <div>
              <button class="btn btn-gold" type="button" data-open-quote>Get a free quote</button>
              <a class="btn btn-ghost light" href="tel:1300555014">Call 1300 555 014</a>
            </div>
          </div>
          <aside class="quote-card" id="quote">
            <div class="quote-card-head">
              <p class="quote-kicker">Free quote · no obligation</p>
              <h2>Get your free cleaning quote</h2>
            </div>
            <p class="hint">Tell us a little about your property and we will get back to you with a clear quote. Your details are only used to respond to your enquiry.</p>
            <div class="success" data-success>
              <h3>Quote request sent</h3>
              <p>Thank you. Bond Clean Specialist will get back to you with a quote based on your property.</p>
            </div>
            <form data-quote-form></form>
          </aside>
        </div>
      </section>

      <section class="section" id="services">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">Our professional cleaning services</p>
            <h2>Residential and commercial cleaning, quoted to the property.</h2>
            <p>
              At Bond Clean Specialist, we provide professional residential and
              commercial cleaning services for tenants, homeowners, property
              managers, real estate agencies, builders and businesses. Our focus
              is on reliable service, attention to detail and high-quality cleaning
              tailored to each property’s requirements.
            </p>
          </div>
          <div class="photo-grid">
{chr(10).join(tiles)}
          </div>
          <a class="btn btn-gold" href="services.html">View all services</a>
        </div>
      </section>

      <section class="section photo-bg">
        <img class="bg-fill" src="images/about-living.png" alt="" />
        <div class="wrap">
          <p class="eyebrow">About Bond Clean Specialist</p>
          <h2>Cleaning that takes one more thing off your list.</h2>
          <p>
            At Bond Clean Specialist, we take pride in delivering high-quality
            cleaning services for homes, rental properties and businesses across
            Brisbane and the Gold Coast.
          </p>
          <p>
            Moving house comes with enough to organise. Packing, utilities,
            paperwork and inspections can quickly become overwhelming. We take
            care of the cleaning — with detailed bond cleaning, spring cleaning,
            carpets, ovens and commercial work — so the process stays clear from
            booking to completion.
          </p>
          <a class="btn btn-gold" href="about.html">Learn more about us</a>
        </div>
      </section>

{stats_section("")}

      <section class="section alt">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">Service areas</p>
            <h2>We cover suburbs across Brisbane and the Gold Coast</h2>
            <p>Bond cleaning, spring cleaning and the rest of our list across Brisbane and the Gold Coast. See the areas page for the full suburb list.</p>
          </div>
          <div class="suburb-grid">
            {bne_links}
          </div>
          <a class="btn btn-gold" href="areas.html">View all service areas</a>
        </div>
      </section>

      <section class="section moss">
        <div class="wrap">
          <div class="split why-split">
            <div>
            <p class="eyebrow">Why choose Bond Clean Specialist</p>
            <h2>The detail that actually matters when a property needs to be spotless.</h2>
            <p class="why-lede">
              Bond Clean Specialist is a local team for Brisbane and Gold Coast properties that need a proper clean, not a rush job. We quote before we start, work through the rooms that matter at inspection, and come back if a miss on our side is flagged. Whether it is a bond clean, a spring clean or a commercial visit, the process stays the same: a clear quote, a booked time, and a property that looks finished.
            </p>
            <ul class="why-points">
              <li>Quote before we start, based on the property</li>
              <li>Skirtings, tracks and wet areas included in the detail</li>
              <li>Reclean where a miss on our side is flagged</li>
              <li>Brisbane and Gold Coast, seven days</li>
            </ul>
            <button class="btn btn-gold" type="button" data-open-quote>Get a free quote</button>
            </div>
            <img class="split-photo" src="images/scene-window.png" alt="Cleaner wiping a bright living-room window" />
          </div>
          <div class="feature-grid">
            <article class="feature"><h3>Thorough, not rushed</h3><p>We work through each property methodically rather than cutting corners to save time.</p></article>
            <article class="feature"><h3>Attention to the details that count</h3><p>Skirting boards, tracks, and corners get the same care as benchtops and floors.</p></article>
            <article class="feature"><h3>Convenient to book</h3><p>Tell us what you need, and we will organise a time that works for you.</p></article>
            <article class="feature"><h3>Clear communication</h3><p>You will know what is included in your clean before we start.</p></article>
            <article class="feature"><h3>Focused on the result</h3><p>A property that looks and feels properly clean, not just tidied.</p></article>
            <article class="feature"><h3>Quote before we start</h3><p>We talk through your property first, then put together a clear quote.</p></article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <p class="eyebrow">Questions</p>
            <h2>Straight answers before you book.</h2>
          </div>
          <div class="faq-grid">
            {faq_col(faqs[:mid])}
            {faq_col(faqs[mid:])}
          </div>
        </div>
      </section>

      <section class="section dark">
        <div class="wrap cta-band">
          <img class="split-photo" src="images/scene-vacuum.png" alt="Cleaner vacuuming a bright hallway" />
          <div class="cta-copy">
            <p class="eyebrow">Ready to take cleaning off your list?</p>
            <h2>Tell us about your property and we will help you organise the right service.</h2>
            <p>
              Bond, spring, carpets, ovens or a commercial clean — send a few details and we will come back with a quote that matches the property and your date.
            </p>
            <ul class="cta-points">
              <li>Clear quote before we start</li>
              <li>Brisbane and the Gold Coast</li>
              <li>Reclean if the miss is ours</li>
            </ul>
            <div class="cta-actions">
              <a class="btn btn-ghost light" href="tel:1300555014">1300 555 014</a>
              <button class="btn btn-gold" type="button" data-open-quote>Get a free quote</button>
            </div>
          </div>
        </div>
      </section>'''
    write(ROOT / "index.html", page("Bond Clean Specialist | Cleaning for Homes and Businesses", "", "home", main))


def services_hub():
    jump = "".join(f'<a href="#{s["slug"]}">{s["name"]}</a>' for s in SERVICES)
    blocks = []
    for i, s in enumerate(SERVICES):
        n = f"{i + 1:02d}"
        alt = " alt" if i % 2 == 0 else ""
        flip = " flip" if i % 2 == 1 else ""
        extra = "".join(f"<p>{p}</p>" for p in s["body"][:1])
        blocks.append(
            f'''      <section class="section{alt} service-detail" id="{s["slug"]}">
        <div class="wrap split{flip}">
          <div>
            <p class="eyebrow">{n} · {s["name"]}</p>
            <h2>{s["short"]}</h2>
            <p>{s["intro"]}</p>
            {extra}
            <button class="btn btn-gold" type="button" data-open-quote>Get a {s["name"].lower()} quote</button>
          </div>
          <img class="service-hero-photo" src="images/{s["img"]}" alt="{s["name"]}" />
        </div>
      </section>'''
        )
    main = f'''      <section class="page-hero">
        <div class="wrap">
          <p class="eyebrow">Our professional cleaning services</p>
          <h1>Residential and commercial cleaning, tailored to the property.</h1>
          <p class="lede">
            At Bond Clean Specialist, we provide professional residential and commercial cleaning services for tenants, homeowners, property managers, real estate agencies, builders and businesses. Our focus is on reliable service, attention to detail and high-quality cleaning tailored to each property’s requirements.
          </p>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <nav class="service-jump" aria-label="Service list">
            {jump}
          </nav>
        </div>
      </section>
{chr(10).join(blocks)}'''
    write(ROOT / "services.html", page("Services | Bond Clean Specialist", "", "services", main))


def service_pages():
    for s in SERVICES:
        paras = "".join(f"<p>{p}</p>" for p in s["body"])
        main = f'''      <section class="page-hero photo">
        <div class="hero-bg"><img src="../images/{s["img"]}" alt="" /></div>
        <div class="wrap">
          <p class="eyebrow">{s["name"]}</p>
          <h1>{s["h1"]}</h1>
          <p class="lede">{s["intro"]}</p>
          <button class="btn btn-gold" type="button" data-open-quote>Get a free quote</button>
        </div>
      </section>
      <section class="section">
        <div class="wrap split">
          <div>
            {paras}
            <button class="btn btn-gold" type="button" data-open-quote>Get a {s["name"].lower()} quote</button>
          </div>
          <img class="service-hero-photo" src="../images/{s["img"]}" alt="{s["name"]}" />
        </div>
      </section>
{why_section(s["why"], 0)}
{book_section(s["name"])}
{stats_section("../")}
{faq_block(s["faqs"])}'''
        write(ROOT / "services" / f'{s["slug"]}.html', page(f'{s["name"]} | Bond Clean Specialist', "../", "services", main))


def area_pages():
    all_areas = [("Gold Coast", n) for n in GC_AREAS] + [("Brisbane", n) for n in BNE_AREAS]
    why_sets = [
        [
            ("Local knowledge of the streets", "We quote {name} jobs based on the property type we see across this suburb — units, houses and townhouses."),
            ("Inspection-ready detail", "Skirtings, tracks and wet areas are cleaned with handover in mind, not a once-over tidy."),
            ("Easy to book from {name}", "Send the address, bedrooms and date. We confirm whether we can attend and send a clear quote."),
        ],
        [
            ("Quoted before we start", "No {name} job starts without a price you have seen. The scope sits with the quote."),
            ("Reclean if the miss is ours", "If inspection notes flag something we cleaned, we come back where the miss is ours."),
            ("One team for the full list", "Bond, spring, carpets, ovens and commercial work can be organised from the same enquiry."),
        ],
        [
            ("Access that suits handover", "Vacant rentals and occupied homes in {name} are booked around keys, agents and your moving day."),
            ("Clear communication", "You will know what is included, when we arrive, and who to call if something needs a follow-up."),
            ("Brisbane and Gold Coast cover", "{name} sits in our {region} list. Nearby suburbs can usually be quoted on the same call."),
        ],
    ]
    for i, (region, name) in enumerate(all_areas):
        slug = slugify(name)
        variant = i % 3
        items = [(t.format(name=name, region=region), d.format(name=name, region=region)) for t, d in why_sets[variant]]
        img = "areas-brisbane.png" if region == "Brisbane" else "areas-goldcoast.png"
        intros = [
            f"Bond Clean Specialist provides professional cleaning in {name}, {region}. Bond cleans, spring cleans, ovens, carpets and commercial work are quoted to the property — not a generic suburb average.",
            f"If you are moving out of a rental in {name} or need a deeper home clean, we organise the visit around your date and the rooms that actually need the work.",
            f"From end-of-lease cleaning to hourly spring cleaning, {name} properties are booked the same way as the rest of our {region} list: tell us the layout, get a quote, we take the clean off your list.",
        ]
        main = f'''      <section class="page-hero photo">
        <div class="hero-bg"><img src="../images/{img}" alt="" /></div>
        <div class="wrap">
          <p class="eyebrow">{region}</p>
          <h1>Cleaning services in {name}</h1>
          <p class="lede">{intros[variant]}</p>
          <button class="btn btn-gold" type="button" data-open-quote>Get a {name} quote</button>
        </div>
      </section>
      <section class="section">
        <div class="wrap split">
          <div>
            <h2>Professional cleaning for {name} homes and rentals.</h2>
            <p>We cover bond cleaning, spring cleaning, carpet steam cleaning, oven and BBQ cleaning, and the rest of our residential and commercial list when the property is in {name}.</p>
            <p>Call 1300 555 014 or request a quote with your street, bedrooms and preferred date.</p>
            <a class="btn btn-gold" href="../services/bond-cleaning.html">Bond cleaning in {name}</a>
          </div>
          <img class="split-photo" src="../images/svc-bond.png" alt="Bond cleaning" />
        </div>
      </section>
{why_section(items, variant)}
{book_section("cleaning in " + name)}
{stats_section("../")}'''
        write(ROOT / "areas" / f"{slug}.html", page(f"Cleaning in {name} | Bond Clean Specialist", "../", "areas", main))


def areas_hub():
    gc = "".join(f'<a href="areas/{slugify(n)}.html">{n}</a>' for n in GC_AREAS)
    bne = "".join(f'<a href="areas/{slugify(n)}.html">{n}</a>' for n in BNE_AREAS)
    main = f'''      <section class="page-hero photo">
        <div class="hero-bg"><img src="images/areas-brisbane.png" alt="" /></div>
        <div class="wrap">
          <p class="eyebrow">Service areas</p>
          <h1>Serving Brisbane and the Gold Coast</h1>
          <p class="lede">Each suburb has its own page. If your street sits just outside the list, call 1300 555 014 and ask.</p>
        </div>
      </section>
      <section class="section alt">
        <div class="wrap">
          <h2>Gold Coast</h2>
          <div class="areas">{gc}</div>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <h2>Brisbane</h2>
          <div class="areas">{bne}</div>
          <p style="margin-top:24px"><button class="btn btn-gold" type="button" data-open-quote>Request a quote for your suburb</button></p>
        </div>
      </section>'''
    write(ROOT / "areas.html", page("Service areas | Bond Clean Specialist", "", "areas", main))


def about_page():
    main = '''      <section class="page-hero photo">
        <div class="hero-bg"><img src="images/about-living.png" alt="" /></div>
        <div class="wrap">
          <p class="eyebrow">About us</p>
          <h1>Cleaning handled properly, without adding stress to a busy day.</h1>
          <p class="lede">Bond Clean Specialist is a Brisbane and Gold Coast cleaning team built around a clear quote, detailed work and communication you can follow from the first message to the finished job.</p>
        </div>
      </section>
      <section class="section">
        <div class="wrap split">
          <img class="split-photo" src="images/scene-bathroom.png" alt="A professionally cleaned modern bathroom" />
          <div>
            <p class="eyebrow">Who we are</p>
            <h2>A local team for homes, rentals and commercial spaces.</h2>
            <p>Bond Clean Specialist was built around a straightforward idea: cleaning should be handled properly, without cutting corners, and without adding stress to an already busy day.</p>
            <p>We cover fourteen services — from bond cleans and carpets through to offices, gyms and hospitality floors — and quote each job on the property in front of us.</p>
            <p>Our approach is methodical. We work through a property the same way each time, so the details that are easy to miss — skirting boards, window tracks, the inside of an oven — get proper attention rather than a quick pass.</p>
            <p>We know that inviting someone into your home or rental requires trust, which is why we keep communication clear from the first enquiry through to the completed job.</p>
          </div>
        </div>
      </section>
      <section class="section alt">
        <div class="wrap split">
          <div class="mission-box">
            <p class="eyebrow">Our mission</p>
            <h2>Take the clean off your list so you can get on with the move, the roster or the open.</h2>
            <p>We exist to deliver a detailed, honestly quoted clean for tenants, homeowners, landlords and businesses across Brisbane and the Gold Coast — and to come back if a miss on our side is flagged.</p>
          </div>
          <div>
            <p class="eyebrow">Our values</p>
            <div class="values-grid">
              <article class="why-card"><h3>Detail</h3><p>The job is the tracks, skirtings and wet areas — not only the surfaces you see from the doorway.</p></article>
              <article class="why-card"><h3>Clarity</h3><p>A quote you can read, a time you can plan around, and a person to call if something needs a follow-up.</p></article>
              <article class="why-card"><h3>Accountability</h3><p>If something we cleaned is missed and the miss is ours, we arrange a reclean.</p></article>
            </div>
          </div>
        </div>
      </section>'''
    write(ROOT / "about.html", page("About | Bond Clean Specialist", "", "about", main))


def prices_page():
    main = '''      <section class="page-hero photo">
        <div class="hero-bg"><img src="images/svc-bond.png" alt="" /></div>
        <div class="wrap">
          <p class="eyebrow">Prices</p>
          <h1>Bond cleaning prices</h1>
          <p class="lede">Starting prices for end of lease cleaning across Brisbane and the Gold Coast. Your quote is confirmed once we know the property.</p>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <h2>End of lease (bond) cleaning</h2>
          <table class="prices-table">
            <thead><tr><th>Property</th><th>From</th></tr></thead>
            <tbody>
              <tr><td>Studio</td><td>from $265</td></tr>
              <tr><td>1 bedroom</td><td>from $285</td></tr>
              <tr><td>2 bedroom</td><td>from $335</td></tr>
              <tr><td>3 bedroom</td><td>from $409</td></tr>
              <tr><td>4 bedroom</td><td>Call for a quote</td></tr>
            </tbody>
          </table>
          <p class="price-note">Please note: prices are indicative and subject to location, property condition and availability. A minimum call-out may apply. Larger or heavily soiled properties may need a quote after we understand the layout. Other services are quoted on request.</p>
          <button class="btn btn-gold" type="button" data-open-quote>Get my free quote</button>
        </div>
      </section>'''
    write(ROOT / "prices.html", page("Bond cleaning prices | Bond Clean Specialist", "", "prices", main))


def simple_page(filename, title, active, heading, body_html):
    main = f'''      <section class="page-hero">
        <div class="wrap">
          <p class="eyebrow">{heading}</p>
          <h1>{title.split("|")[0].strip()}</h1>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          {body_html}
        </div>
      </section>'''
    write(ROOT / filename, page(title, "", active, main))


def contact_page():
    main = '''      <section class="page-hero">
        <div class="wrap has-illo">
          <div>
          <p class="eyebrow">Contact us</p>
          <h1>Let’s get your property cleaned</h1>
          <p class="lede">
            Bond clean, carpet, office, gym or hospitality — tell
            us the property and the service. We will get back to you with a quote.
          </p>
          </div>
          <img class="split-photo" src="images/scene-kitchen.png" alt="Professional cleaner working in a kitchen" />
        </div>
      </section>
      <section class="section alt">
        <div class="wrap split">
          <div class="card">
            <h3>Bond Clean Specialist</h3>
            <p>Phone: <a href="tel:1300555014">1300 555 014</a> — call us for a quick chat or to book a service.</p>
            <p>Email: <a href="mailto:hello@bondcleanspecialist.com.au">hello@bondcleanspecialist.com.au</a> — send us the details of your property and cleaning needs.</p>
            <p>Service areas: Gold Coast and Brisbane. See the full suburb list on the <a href="areas.html">areas page</a>.</p>
            <p>Hours: seven days. Have the property type, service required, and preferred date ready.</p>
            <a class="btn btn-ink" href="tel:1300555014">Call 1300 555 014</a>
          </div>
          <div class="quote-card">
            <h2>Get your free cleaning quote</h2>
            <p class="hint">Your details are only used to respond to your enquiry.</p>
            <div class="success" data-success>
              <h3>Quote request sent</h3>
              <p>Thank you. We will get back to you with a quote.</p>
            </div>
            <form data-quote-form></form>
          </div>
        </div>
      </section>'''
    write(ROOT / "contact.html", page("Contact | Bond Clean Specialist", "", "contact", main))


def tips_page():
    main = '''      <section class="page-hero">
        <div class="wrap">
          <p class="eyebrow">How to prepare</p>
          <h1>A few things that help the clean go smoothly.</h1>
          <p class="lede">You do not need to pre-clean. These notes just make it easier for the team to reach every surface included in your quote.</p>
        </div>
      </section>
      <section class="section">
        <div class="wrap">
          <ul class="list">
            <li>For a bond clean, have belongings out of the property where you can, including cupboards, fridge and oven.</li>
            <li>Arrange keys or vacant access and tell us if an agent will meet the team.</li>
            <li>Power and water on for the visit.</li>
            <li>Flag pets, parking and any extra rooms when you quote.</li>
            <li>Spring cleaning: list the rooms you want done first so the hours are used on your priorities.</li>
          </ul>
          <button class="btn btn-gold" type="button" data-open-quote>Get a free quote</button>
        </div>
      </section>'''
    write(ROOT / "tips.html", page("How to prepare | Bond Clean Specialist", "", "tips", main))


if __name__ == "__main__":
    index_page()
    services_hub()
    service_pages()
    area_pages()
    areas_hub()
    about_page()
    prices_page()
    contact_page()
    tips_page()
    simple_page(
        "privacy.html",
        "Privacy policy | Bond Clean Specialist",
        "contact",
        "Legal",
        """<div class="legal-copy">
          <p>This privacy policy explains how Bond Clean Specialist collects, uses and looks after the personal information you give us when you request a quote, book a clean, call us or email us. If you have a question about your information, contact us on 1300 555 014 or hello@bondcleanspecialist.com.au.</p>
          <h2>Who we are</h2>
          <p>Bond Clean Specialist provides residential and commercial cleaning across Brisbane and the Gold Coast. When this policy says “we” or “us”, it means Bond Clean Specialist.</p>
          <h2>What we collect</h2>
          <p>We collect the details you choose to send us. That typically includes your name, phone number, email address, suburb, property type, service required, preferred date, and any notes you add about the property or access. If you call us, we may write down the same type of information so we can quote and book the job.</p>
          <p>We do not ask for payment card details through this website. We do not collect extra information from you unless you give it to us as part of an enquiry or booking.</p>
          <h2>How we use your information</h2>
          <p>We use your details to reply to your enquiry, prepare a quote, confirm a booking, talk to you about the visit, and follow up if a reclean is needed. We may also use your contact details to send a practical update about your booking, such as arrival time or access notes.</p>
          <p>We do not sell your personal information. We do not use your enquiry details for unrelated marketing lists.</p>
          <h2>Who we share it with</h2>
          <p>Access to enquiry and booking information is limited to the people who need it to quote, schedule or complete the work. If a job requires a specialist visit, only the information needed to carry out that visit is shared with the team doing the work.</p>
          <p>We may disclose information if we are required to by law, or if it is necessary to protect our rights, a customer, or the property.</p>
          <h2>How long we keep it</h2>
          <p>We keep enquiry and booking details for as long as we need them to complete the job, handle a reclean request, or meet ordinary business record needs. If you ask us to update or remove your enquiry details, we will do so unless we still need them for a current booking or a legal reason.</p>
          <h2>Your choices</h2>
          <p>You can ask us what information we hold about your enquiry, ask us to correct it, or ask us to remove it where we no longer need it. Email hello@bondcleanspecialist.com.au or call 1300 555 014 and we will help you.</p>
          <h2>This website</h2>
          <p>This website is used to explain our services and collect quote requests. It may use ordinary technical logs needed to operate the site. Do not send sensitive personal information through the quote form unless it is needed for the booking.</p>
          <h2>Changes</h2>
          <p>We may update this policy if how we handle information changes. The current version will be the one published on this page.</p>
          <p>If you need this policy explained, or you want to talk about your enquiry details, use the <a href="contact.html">contact page</a>.</p>
        </div>""",
    )
    simple_page(
        "terms.html",
        "Terms and conditions | Bond Clean Specialist",
        "contact",
        "Legal",
        """<div class="legal-copy">
          <p>These terms explain how quotes, bookings and cleaning visits work with Bond Clean Specialist. By requesting a quote or confirming a booking, you agree to the terms below. If anything in your written quote is different, the quote you accept is the one that applies.</p>
          <h2>Quotes</h2>
          <p>Quotes are based on the details you provide, including the suburb, property type, service required, access and the condition of the property. If those details change, the price and time required may change as well.</p>
          <p>A website or phone quote is an estimate until we confirm the scope with you in writing or by message. The final inclusions are what we confirm before the visit.</p>
          <h2>Bookings</h2>
          <p>A booking is confirmed when you accept the quote and we agree a date and time. Please make sure someone can provide access at that time, or that vacant access has been arranged with the agent or owner.</p>
          <p>If you need to change or cancel, tell us as soon as you can so we can offer the time to another customer. Late changes may mean we need to rebook rather than keep the original slot.</p>
          <h2>Access and the property</h2>
          <p>The property should be ready for the agreed clean. For a bond clean, it helps if belongings are out so we can reach floors, cupboards and wet areas. Tell us in advance if furniture will still be there, if parking is limited, or if there are pets, alarms or special entry notes.</p>
          <p>We work on the areas included in your quote. Extra rooms, extra appliances or a much heavier condition than described may need extra time and a revised price before we continue.</p>
          <h2>The clean</h2>
          <p>We provide professional cleaning to the agreed list. Results depend on the condition of the property, the surfaces, and the time booked. Spring cleaning is charged by the hour, so completion of every requested task depends on the hours booked and the condition of the property.</p>
          <p>Stain removal on carpets and upholstery depends on the material, age and type of staining. We discuss realistic results before we start specialised work.</p>
          <h2>Reclean</h2>
          <p>If something we cleaned is flagged after the job, contact us with the inspection notes or a clear description of the area. Where the miss is ours, we will arrange a reclean. Reclean cover does not apply to extra work that was not in the original quote, to wear and tear, or to issues caused after we left the property.</p>
          <h2>Payment</h2>
          <p>Payment terms are confirmed with your quote. Unless we agree otherwise, payment is due as set out in that quote. We may ask for payment details before a booking is locked in.</p>
          <h2>Limitation</h2>
          <p>We take care with the property while we work. Tell us about fragile items, wet paint, alarm sensors or anything that needs extra care before we arrive. We are not responsible for existing damage, hidden faults, or items that were not made available for cleaning.</p>
          <h2>Changes</h2>
          <p>We may update these terms from time to time. The version on this page applies to new quotes and bookings from the date it is published.</p>
          <p>Questions about a quote or booking can be sent through the <a href="contact.html">contact page</a>, by calling 1300 555 014, or by emailing hello@bondcleanspecialist.com.au.</p>
        </div>""",
    )
    print("done")
