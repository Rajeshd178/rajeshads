import AdCard from "./AdCard";
import SectionHeader from "./SectionHeader";

// Print ad images
import caratlane from "@/assets/ads/caratlane.jpg";
import amul from "@/assets/ads/amul.jpg";
import josalukkas from "@/assets/ads/josalukkas.jpg";
import skechers from "@/assets/ads/skechers.jpg";
import maruti from "@/assets/ads/maruti.jpg";

// TV ad images
import airtel from "@/assets/ads/airtel.jpg";
import surfexcel from "@/assets/ads/surfexcel.jpg";
import fevicol from "@/assets/ads/fevicol.jpg";
import lic from "@/assets/ads/lic.jpg";
import tatatea from "@/assets/ads/tatatea.jpg";

// Social media ad images
import netflix from "@/assets/ads/netflix.jpg";
import cred from "@/assets/ads/cred.jpg";
import nykaa from "@/assets/ads/nykaa.jpg";
import mamaearth from "@/assets/ads/mamaearth.jpg";
import boat from "@/assets/ads/boat.jpg";

// Outdoor ad images
import capitalmind from "@/assets/ads/capitalmind.jpg";
import johnniewalker from "@/assets/ads/johnniewalker.jpg";
import abaran from "@/assets/ads/abaran.jpg";
import tanishq from "@/assets/ads/tanishq.jpg";
import godrej from "@/assets/ads/godrej.jpg";

const printAds = [
  {
    brand: "CaratLane",
    title: "Diamond Jewellery Offer Ad",
    image: caratlane,
    targetAudience: "Urban middle- to upper-middle-class couples, especially young professionals and newly engaged or married individuals. It also appeals to people looking to purchase diamond jewellery for occasions like proposals, anniversaries, or Valentine's season.",
    message: "Owning natural diamond jewellery is now more affordable and accessible. By highlighting a flat 30% discount and low starting prices, the brand reduces the fear of high cost usually associated with diamonds.",
    visualElements: "A romantic couple placed at the centre creates an emotional connection. Soft lighting and warm tones give a premium yet intimate feel. Purple and gold colours dominate the layout, reinforcing luxury and trust. Clean typography ensures the offer details are easy to notice.",
    cta: "Encourages customers to visit the store or explore the collection, subtly supported by offers like free try-at-home and video calls, which reduce hesitation.",
    relevance: "Print works well here because jewellery buyers often spend time observing details, offers, and visuals carefully. Newspapers like TOI reach a mature, financially independent audience, making it an ideal medium.",
    celebrity: "No celebrity endorsement. The brand relies on emotional storytelling and product appeal, making the ad feel more personal and relatable.",
  },
  {
    brand: "Amul",
    title: '"Bharat ki Taxi" App Ad',
    image: amul,
    targetAudience: "Daily commuters, cab users, and digitally active Indians, including students, office-goers, and families who rely on transportation services.",
    message: 'Amul is expanding beyond dairy into digital services, positioning its app as an inclusive, national solution for everyone. The phrase "App sab ke liye" reinforces accessibility and trust.',
    visualElements: "The iconic Amul Girl illustration is used, instantly grabbing attention and invoking nostalgia. Cartoon-style visuals combined with Indian transport modes (auto, bike, car) give the ad a patriotic and friendly tone.",
    cta: "The implied CTA is to download and use the Amul app, suggested through the smartphone visual and simple messaging.",
    relevance: "Newspaper readers often include working adults and families, who are likely users of transport apps. Print also suits Amul's traditional yet modern brand image.",
    celebrity: "No celebrity is used. The Amul Girl itself acts as a brand ambassador, which is already widely trusted and recognised.",
  },
  {
    brand: "Jos Alukkas",
    title: "Hearts Collection Ad",
    image: josalukkas,
    targetAudience: "Women buyers, couples, and gift purchasers, particularly those shopping for Valentine's Day, weddings, or meaningful gifting occasions.",
    message: "Celebrates love, commitment, and timeless relationships through diamond jewellery. Discount offers further encourage immediate purchase.",
    visualElements: "Soft beige and blush tones dominate the background, giving a calm and elegant feel. The jewellery pieces are neatly showcased alongside a poised female model, highlighting grace and sophistication. Serif typography adds a traditional luxury touch.",
    cta: "Encourages readers to visit the store or shop online, reinforced by limited-period offers and exchange benefits.",
    relevance: "Jewellery buyers often trust print advertisements in reputed newspapers more than digital ads. Print also allows customers to carefully read offers and compare designs.",
    celebrity: "No celebrity endorsement is present. The brand uses a model to represent elegance, keeping the focus on the jewellery rather than fame.",
  },
  {
    brand: "Skechers",
    title: "Mohun Bagan Partnership Ad",
    image: skechers,
    targetAudience: "Sports enthusiasts, football fans, and young adults who value performance footwear and active lifestyles.",
    message: "Skechers footwear delivers comfort and performance, reinforced by its association with a professional football club.",
    visualElements: "Action shots of football players in motion, creating energy and intensity. Dark backgrounds with bold red and green elements reflect strength and team spirit. The typography is strong and bold, matching the sports theme.",
    cta: "Indirect CTA encouraging viewers to associate the brand with professional-level performance, leading to consideration and purchase.",
    relevance: "Print ads in newspapers reach sports-following audiences, especially those who read sports pages. The large visual format enhances impact.",
    celebrity: "Instead of individual celebrities, the ad uses team endorsement (Mohun Bagan Super Giant), which builds credibility among football fans.",
  },
  {
    brand: "Maruti Suzuki",
    title: "Nexa Loyalty Upgrade Ad",
    image: maruti,
    targetAudience: "Existing Maruti Suzuki car owners, especially middle-aged professionals and families considering an upgrade to a premium vehicle.",
    message: "Brand loyalty is valued and rewarded, encouraging current customers to upgrade within the Maruti ecosystem through exclusive benefits.",
    visualElements: 'Monochrome premium aesthetic, showing a confident man in a luxurious setting, reinforcing exclusivity. Minimal text and clean design give it a sophisticated Nexa showroom feel.',
    cta: '"Scan to connect to a showroom" and website links push readers towards immediate action.',
    relevance: "Print advertising works well for automobiles because buyers often make high-involvement decisions and trust established newspapers like TOI.",
    celebrity: "No celebrity endorsement is used. The ad focuses on lifestyle aspiration, making the reader imagine themselves in that position.",
  },
];

const tvAds = [
  {
    brand: "Airtel",
    title: '"Har Friend Zaroori Hai Yaar"',
    image: airtel,
    targetAudience: "Young adults, students, and urban families who rely heavily on mobile connectivity for communication, entertainment, and everyday activities. Especially appeals to youth who value friendships and emotional connections.",
    message: "Airtel understands the importance of relationships and connection. By portraying the internet as a reliable friend, Airtel positions itself as a supportive and dependable companion in moments of confusion, loneliness, and need.",
    visualElements: "Warm, relatable visuals featuring young people in everyday situations. Natural lighting, casual clothing, and expressive facial emotions make the scenes feel realistic. The red Airtel branding appears subtly but consistently.",
    cta: "Encourages viewers to choose Airtel for reliable network and internet services, implied through taglines rather than direct selling.",
    relevance: "Television is ideal because emotional storytelling works best with moving visuals and sound. TV allows Airtel to build emotional bonds that go beyond technical features.",
    celebrity: "No celebrity endorsement. The ad focuses on real-life situations and relatable characters, making the message more authentic.",
  },
  {
    brand: "Surf Excel",
    title: '"Daag Achhe Hain"',
    image: surfexcel,
    targetAudience: "Families with children, especially mothers and parents who value emotional growth and freedom for kids alongside cleanliness.",
    message: "Stains are a sign of learning, fun, and values, and should not be feared. Surf Excel positions itself as a detergent that supports children's experiences.",
    visualElements: "Bright, warm colours showing kids playing freely and getting dirty. The visuals contrast playful mess with emotional warmth. The Surf Excel pack stands out clearly at the centre.",
    cta: "Subtle CTA encouraging parents to choose Surf Excel for worry-free washing, trusting the product to handle tough stains.",
    relevance: "Television is ideal because emotional storytelling and visuals create a strong impact. The narrative format connects deeply with family audiences.",
    celebrity: "No celebrity endorsement. Real-life situations and children's innocence serve as the emotional anchor.",
  },
  {
    brand: "Fevicol",
    title: "Strong Bond TV Ad",
    image: fevicol,
    targetAudience: "Households, carpenters, furniture makers, and everyday consumers who value durability and strength in products.",
    message: "Fevicol creates bonds that never break, no matter how extreme the situation.",
    visualElements: "Exaggerated humour, showing an overloaded vehicle held together because of Fevicol. Earthy tones, rural visuals, and dramatic composition add authenticity and memorability.",
    cta: "Indirect CTA reinforcing brand recall and trust, ensuring Fevicol comes to mind whenever strength is required.",
    relevance: "Television amplifies Fevicol's visual humour and exaggeration, making the message unforgettable across language and literacy barriers.",
    celebrity: "No celebrity is used. The brand relies on concept-driven creativity, which has become its signature style.",
  },
  {
    brand: "LIC",
    title: '"Zindagi Ke Saath Bhi, Zindagi Ke Baad Bhi"',
    image: lic,
    targetAudience: "Working professionals, parents, and middle-aged individuals who are concerned about long-term financial security for their families.",
    message: "LIC stands by families during life and even after, emphasizing trust, protection, and reliability.",
    visualElements: "Calm visuals like protective hands, family silhouettes, and a growing plant symbolize security and future growth. Blue and yellow colours reflect trust and stability.",
    cta: "Encourages viewers to invest in LIC policies, either by contacting agents or visiting LIC offices.",
    relevance: "Television suits insurance advertising because trust is built through repeated exposure and emotional reassurance, which TV delivers effectively.",
    celebrity: "No celebrity endorsement is present. LIC relies on its legacy and emotional credibility instead of star power.",
  },
  {
    brand: "Tata Tea",
    title: '"Jaago Re" Campaign',
    image: tatatea,
    targetAudience: "Socially aware citizens, families, and young adults, especially those concerned about social and environmental issues.",
    message: "Urges viewers to wake up and take responsibility—whether it is voting, protecting the environment, or making conscious choices.",
    visualElements: "Children holding placards create a strong emotional contrast, symbolising innocence and urgency. Green and earthy tones reflect sustainability, while product packs subtly maintain brand presence.",
    cta: "Ideological rather than commercial, encouraging viewers to think, act responsibly, and engage with social change.",
    relevance: "Television allows Tata Tea to blend social messaging with brand purpose, reaching a mass audience with emotional storytelling.",
    celebrity: "No celebrity endorsement is used. The message itself is the hero, making it feel sincere and impactful.",
  },
];

const socialAds = [
  {
    brand: "Netflix India",
    title: "Meme-led Content Promotion",
    image: netflix,
    targetAudience: "Young adults, college students, and binge-watchers, especially people active on Instagram, Twitter, and meme pages. Strongly connects with Gen Z and millennials who consume pop culture daily.",
    message: "Netflix understands your emotions as a viewer. By using humour and relatable situations, the brand positions itself as fun, self-aware, and close to its audience.",
    visualElements: "Collage of meme-style visuals from popular Netflix shows. Bold captions, screenshots from series, and the red-black Netflix branding instantly catch attention while scrolling.",
    cta: "Indirect but effective — encourages users to watch, share, and engage with Netflix content by triggering relatability.",
    relevance: "Social media is the perfect medium because memes are meant to be shared. This format thrives on Instagram and Twitter, where humour drives organic reach.",
    celebrity: "Actors from Netflix series appear, but not as endorsers. The characters and scenes themselves act as hooks, which feels more authentic.",
  },
  {
    brand: "CRED",
    title: "Celebrity-led Social Campaign",
    image: cred,
    targetAudience: "Urban professionals, credit card users, and digitally savvy individuals who are financially literate and active on platforms like Instagram and YouTube.",
    message: "CRED is exclusive, rewarding, and cool. The ad uses humour and star power to make financial responsibility feel aspirational.",
    visualElements: "Bright outdoor visuals, a confident celebrity pose, and the bold black CRED logo create a high-impact frame. The contrast between casual fun and premium branding works well for social feeds.",
    cta: "Subtly encourages users to download the CRED app and pay bills, without sounding like a typical finance ad.",
    relevance: "Social media allows CRED to build a brand personality, not just promote features. Short-form videos and reels help the ad go viral.",
    celebrity: "Yes, a popular Indian celebrity is featured, adding recall value and helping the brand cut through clutter.",
  },
  {
    brand: "Nykaa",
    title: "Beauty & Lifestyle Ad",
    image: nykaa,
    targetAudience: "Young women, beauty enthusiasts, and online shoppers, especially those following influencers and fashion content on Instagram.",
    message: "Nykaa is a one-stop destination for everything you love in beauty and self-care. It promotes indulgence and self-expression.",
    visualElements: "Soft pastel colours, neatly arranged products, and a glamorous model create an aspirational yet approachable look. The typography is elegant and feminine.",
    cta: "Encourages users to shop online via the Nykaa app or website, often supported by offers or exclusivity.",
    relevance: "Instagram is ideal because beauty products rely heavily on visual appeal and influencer culture, which social media supports perfectly.",
    celebrity: "Yes, a well-known actress is featured, adding trust and aspiration to the brand.",
  },
  {
    brand: "Mamaearth",
    title: "Rice Dewy Bright Face Wash",
    image: mamaearth,
    targetAudience: "Young adults, skincare beginners, and health-conscious consumers, especially women looking for safe, natural products.",
    message: "Focuses on natural ingredients and visible results, positioning the product as gentle, effective, and suitable for daily use.",
    visualElements: "Warm tones, glowing skin visuals, and ingredient highlights like rice water and niacinamide create a clean and trustworthy aesthetic. Product packaging is clearly visible.",
    cta: 'Motivates users to try the product for glowing skin, often supported by claims like "India\'s No.1".',
    relevance: "Social media is ideal because skincare decisions are often influenced by visual proof, reviews, and trends seen online.",
    celebrity: "Yes, a popular female celebrity is featured, enhancing credibility and aspirational appeal.",
  },
  {
    brand: "boAt",
    title: "Fitness & Motivation Ad",
    image: boat,
    targetAudience: "Fitness enthusiasts, young men and women, and music lovers, especially Gen Z users active on Instagram Reels and YouTube Shorts.",
    message: "Success starts with mindset and discipline, with boAt products acting as a companion in the fitness journey.",
    visualElements: "High-contrast lighting, intense workout visuals, and bold typography create a motivational feel. Red and black tones add power and energy.",
    cta: "Encourages users to choose boAt for performance-driven lifestyles, linking fitness with audio motivation.",
    relevance: "Short motivational videos perform extremely well on social media, making this format perfect for Reels and Shorts.",
    celebrity: "The ad may feature an athlete or fitness influencer, reinforcing performance and dedication.",
  },
];

const outdoorAds = [
  {
    brand: "Capitalmind",
    title: '"Win at Life" Billboard',
    image: capitalmind,
    targetAudience: "Urban professionals, salaried employees, entrepreneurs, and investors who regularly commute through busy city roads, thinking about long-term financial growth.",
    message: 'Connects investment success with life success. The line "Not yet. Why not? Win at Life" subtly pushes the audience to reflect on their financial planning.',
    visualElements: "A lone trekker standing on a mountain peak symbolizes achievement and perseverance. Dark blue background conveys seriousness and trust, while minimal text ensures readability from a distance.",
    cta: "Subtle and informative, directing viewers to visit the website to learn more about mutual fund investments.",
    relevance: "Outdoor advertising works well for financial brands because daily repetition builds credibility and brand recall among commuters.",
    celebrity: "No celebrity endorsement is used. The brand relies on aspirational imagery and messaging.",
  },
  {
    brand: "Johnnie Walker",
    title: '"Keep Walking" Outdoor Campaign',
    image: johnniewalker,
    targetAudience: "Urban, premium consumers, including young professionals and aspirational drinkers who associate brands with lifestyle and progress.",
    message: '"Keep Walking" reinforces the idea of continuous progress and ambition, aligning personal growth with the brand philosophy.',
    visualElements: "A confident female figure walking forward, combined with soft blue and beige tones, creates a calm yet powerful visual. The design feels premium and uncluttered.",
    cta: "There is no direct CTA. The aim is brand positioning and recall, not immediate purchase.",
    relevance: "Large-format billboards enhance luxury perception and ensure strong visual impact in high-traffic areas.",
    celebrity: "The model is not a celebrity. The brand focuses on symbolism and attitude rather than star power.",
  },
  {
    brand: "Abaran",
    title: "Bridal Collection Billboard",
    image: abaran,
    targetAudience: "Brides-to-be, families, and wedding planners, especially in Bangalore, where weddings are high-investment occasions.",
    message: "Memories and moments last forever, just like the jewellery worn during them. Emotionally connects jewellery with life's milestones.",
    visualElements: "A traditionally dressed bridal couple evokes cultural richness. Soft lavender and neutral tones add elegance, while the jewellery is subtly highlighted.",
    cta: "Directs viewers to visit nearby stores in Rajajinagar, M.G. Road, and J.P. Nagar.",
    relevance: "Outdoor hoardings are ideal for wedding jewellery as they offer high visibility and prestige during peak wedding seasons.",
    celebrity: "No celebrity endorsement is present. The emotional wedding narrative itself is sufficient.",
  },
  {
    brand: "Tanishq",
    title: "Festival of Diamonds Billboard",
    image: tanishq,
    targetAudience: "Urban women, working professionals, and festive shoppers who purchase jewellery during celebrations and special occasions.",
    message: "Promotes the Festival of Diamonds, encouraging customers to celebrate festivals with elegant diamond jewellery.",
    visualElements: "A smiling female model wearing contemporary jewellery instantly draws attention. The blue background gives a premium feel, while the jewellery stands out clearly.",
    cta: "Implied — visit Tanishq stores during the festival period to explore the collection.",
    relevance: "Outdoor advertising is effective during festivals because repeated exposure drives store visits.",
    celebrity: "A popular actress is featured, adding aspirational value and trust to the brand.",
  },
  {
    brand: "Godrej",
    title: "AI Tech Washing Machine Billboard",
    image: godrej,
    targetAudience: "Urban households, middle-class families, and homemakers who value fabric care, especially traditional Indian handloom clothing.",
    message: "Modern technology can safely care for delicate, traditional fabrics, blending innovation with cultural sensitivity.",
    visualElements: "Innovative visual of a saree emerging from a washing machine immediately grabs attention. Earthy colours and bilingual text make the ad inclusive and relatable.",
    cta: "Encourages viewers to trust Godrej washing machines for delicate clothing care, leading to purchase consideration.",
    relevance: "Outdoor hoardings allow creative, oversized visuals that stop people mid-commute and spark curiosity.",
    celebrity: "No celebrity endorsement is used. The concept and visual creativity act as the main attraction.",
  },
];

interface AdSectionProps {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  ads: typeof printAds;
}

const AdSection = ({ id, emoji, title, subtitle, ads }: AdSectionProps) => (
  <section id={id} className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeader emoji={emoji} title={title} subtitle={subtitle} />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad, i) => (
          <AdCard key={ad.brand} index={i} {...ad} />
        ))}
      </div>
    </div>
  </section>
);

export { printAds, tvAds, socialAds, outdoorAds };
export default AdSection;
