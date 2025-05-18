import Layout from "@/components/Layout";
import config from "@/config/site.config.json";
import contactPage from "@/data/pages/contact.json";
import ContactForm from "./ContactForm";

export const metadata = {
  title: contactPage.frontmatter.title,
  description: contactPage.frontmatter.description,
};

const Contact = () => {
  const { contact_info } = contactPage.frontmatter;

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-4">
              <h1 className="text-4xl md:text-5x text-white font-normal text-balance !leading-tight capitalize relative z-10 mix-blend-difference text-left">
                {contact_info.title.first_half}
                {contact_info.title.divider && (
                  <>
                    <br />
                    <span className="inline-block bg-white w-10 md:w-20 h-px mr-4 align-middle"></span>
                  </>
                )}
                {contact_info.title.second_half}
              </h1>
              <p className="font-light mt-8 text-[#464536] text-balance text-left">
                {contact_info.description}
              </p>

              <div className="flex lg:flex-col flex-wrap gap-4 mt-8">
                <div className="bg-light border-2 border-[#DBD8BD] rounded-full px-8 py-4 w-fit">
                  <span className="text-sm font-light text-[#464536]">
                    Email Address
                  </span>
                  <span className="flex items-center gap-x-2 mt-2">
                    {/* prettier-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    <span>{config.footerWidgets.email}</span>
                  </span>
                </div>
                <div className="bg-light border-2 border-[#DBD8BD] rounded-full px-8 py-4 w-fit">
                  <span className="text-sm font-light text-[#464536]">
                    Phone
                  </span>
                  <span className="flex items-center gap-x-2 mt-2">
                    {/* prettier-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <span>{config.footerWidgets.phone}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-6 mt-12 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
