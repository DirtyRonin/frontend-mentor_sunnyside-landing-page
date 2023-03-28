import { ImageCol } from '../components/image-col';
import { OneColImageText } from '../components/one-col-image-text';
import { Testimonial } from '../components/testimonial';
import { TwoColsImageText } from '../components/two-cols-image-text';
import { GetPublicUrl } from '../utils/get-public-url';
import './landing-page.css';

export function LandingPage() {
  return (
    <div className="">
      <section>
        <TwoColsImageText
          title="Transform your brand"
          description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the
          marketing for you."
          imageUrlDesktop="img/desktop/image-transform.jpg"
          imageUrlMobile="img/mobile/image-transform.jpg"
          linkColor="yellow"
          reverse={true}
        />
        <TwoColsImageText
          title="Stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          imageUrlDesktop="img/desktop/image-stand-out.jpg"
          imageUrlMobile="img/mobile/image-stand-out.jpg"
          linkColor="soft-red"
          reverse={false}
        />
      </section>
      <section>
        <div className="grid md:grid-cols-2">
          <OneColImageText
            title="Graphic design"
            description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
            imageUrlDesktop="img/desktop/image-graphic-design.jpg"
            imageUrlMobile="img/mobile/image-graphic-design.jpg"
            textColor="text-dark-desaturated-cyan"
          />
          <OneColImageText
            title="Photography"
            description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            imageUrlDesktop="img/desktop/image-photography.jpg"
            imageUrlMobile="img/mobile/image-photography.jpg"
            textColor="text-dark-blue"
          />
        </div>
      </section>
      <section>
        <div className="grid py-[3.3rem] px-[1.45rem] gap-[3.3rem] ">
          <h3 className="uppercase text-grayish-blue tracking-[.2rem] text-sm font-black text-center">Client Testimonials</h3>
          <div className="grid gap-[3.3rem] justify-center md:grid-cols-3 lg:px-[7.5rem] lg:gap-[2rem] md:px-0">
            <Testimonial
              avatarUrl={GetPublicUrl('img/image-emily.jpg')}
              recommendation="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              name="Emily R."
              profession="Marketing Director"
            />
            <Testimonial
              avatarUrl={GetPublicUrl('img/image-thomas.jpg')}
              recommendation="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
              name="Thomas S."
              profession="Chief Operating Officer"
            />
            <Testimonial
              avatarUrl={GetPublicUrl('img/image-jennie.jpg')}
              recommendation="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
              name="Jennie F."
              profession="Business Owner"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-6">
          <ImageCol imageUrlDesktop="img/desktop/image-gallery-milkbottles.jpg" imageUrlMobile="img/mobile/image-gallery-milkbottles.jpg" />
          <ImageCol imageUrlDesktop="img/desktop/image-gallery-orange.jpg" imageUrlMobile="img/mobile/image-gallery-orange.jpg" />
          <ImageCol imageUrlDesktop="img/desktop/image-gallery-cone.jpg" imageUrlMobile="img/mobile/image-gallery-cone.jpg" />
          <ImageCol imageUrlDesktop="img/desktop/image-gallery-sugarcubes.jpg" imageUrlMobile="img/mobile/image-gallery-sugar-cubes.jpg" />
        </div>
      </section>
    </div>
  );
}
