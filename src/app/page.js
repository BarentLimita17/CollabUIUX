import Minicard from "~/components/sectionMinicard";
import Testimoni from "~/components/sectionTestimoni";
import Banner from "~/components/Sectionbanner";
import SectionBenefit from "~/components/sectionBenefit";
import SectionDownload from "~/components/download";
import AccordionExpandDefault from "~/components/faq";

export default function Home() {
  return (
    <div>
      <Banner />
      <SectionBenefit />
      <Minicard />
      <Testimoni />
      <SectionDownload />
      <AccordionExpandDefault />
    </div>
  );
}
