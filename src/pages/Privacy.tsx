import { useEffect } from "react";
import { Mail, Globe } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="mx-auto max-w-3xl px-6 py-32 text-[#0e1020]">
      <h1 className="text-title">
        PRIVACY POLICY
      </h1>
      <p className="text-minor mt-4 text-[#0e1020]/60">
        <strong>Last updated:</strong> May/2026
      </p>

      <div className="mt-12 space-y-10 text-body text-[#0e1020]/80">
        <div>
          <p>
            FIG respects your privacy and is committed to protecting the personal data you share with us. This policy clearly and transparently describes how we handle that information when you use our website, interact with us, or hire our marketing services.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>1. WHO WE ARE</strong>
          </h2>
          <p className="mt-3">
            We are FIG, a creative marketing agency based in Rotterdam, the Netherlands. For any questions regarding this policy or your data, you can contact us at{" "}
            <a
              href="mailto:hello@figtheagency.com"
              className="underline transition hover:text-[#6f64ff]"
            >
              <strong>hello@figtheagency.com</strong>
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>2. DATA WE COLLECT</strong>
          </h2>
          <p className="mt-3">
            We may collect the following types of information:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Contact and identification data:</strong> name, email, phone number, company, and job title, provided by you when filling out forms, requesting quotes, or subscribing to our communications.
            </li>
            <li>
              <strong>Browsing data:</strong> IP address, browser type, pages visited, time spent, and other technical information collected via cookies and similar technologies.
            </li>
            <li>
              <strong>Social media interaction data:</strong> public information from your profile when you comment, like, or send messages to our channels.
            </li>
            <li>
              <strong>Service delivery data:</strong> briefings, campaign information, and materials you send us or grant access to during marketing projects.
            </li>
          </ul>
          <p className="mt-3">
            We do not intentionally collect sensitive data (such as ethnic origin, religion, or health) without your explicit consent.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>3. HOW WE USE YOUR DATA</strong>
          </h2>
          <p className="mt-3">
            The information collected is used to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Respond to contact requests, inquiries, and send commercial proposals.</li>
            <li>Send newsletters, relevant content, and invitations, when you authorize it or there is a previous relationship.</li>
            <li>Analyze and improve our website performance, personalizing your experience.</li>
            <li>Execute and manage the contracted marketing services.</li>
            <li>Comply with legal and regulatory obligations applicable to our business.</li>
            <li>Protect the security of our operations and prevent fraud.</li>
          </ul>
          <p className="mt-3">
            If we need to process your data for a purpose different from the original, we will inform you and, if necessary, request your authorization.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>4. DATA SHARING</strong>
          </h2>
          <p className="mt-3">
            Your data is not sold or shared indiscriminately. It may be accessed or shared only:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>With essential service providers that help us operate the website, send emails, host data, and analyze information, always under confidentiality and security obligations.</li>
            <li>With partners involved in specific projects, only when necessary to execute the service and with your knowledge.</li>
            <li>Upon legal requirement or determination by a competent authority.</li>
          </ul>
          <p className="mt-3">
            When using services that may involve international data transfers, we adopt measures to ensure your information remains protected with adequate security standards.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>5. COOKIES AND SIMILAR TECHNOLOGIES</strong>
          </h2>
          <p className="mt-3">
            Our website uses cookies to improve navigation and collect anonymous usage statistics. When you first access the site, you will see a banner where you can manage your preferences.
          </p>
          <p className="mt-3">
            The main types of cookies we use:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Necessary:</strong> ensure the basic functioning of the site.
            </li>
            <li>
              <strong>Performance/analysis:</strong> help us understand how visitors use our pages, enabling continuous improvements.
            </li>
            <li>
              <strong>Functional:</strong> remember your choices (such as language) to facilitate future visits.
            </li>
            <li>
              <strong>Advertising:</strong> may be used to display more relevant ads on other platforms.
            </li>
          </ul>
          <p className="mt-3">
            You can set your browser to refuse cookies, but this may affect some site functionalities.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>6. STORAGE AND RETENTION</strong>
          </h2>
          <p className="mt-3">
            We keep your data only for as long as necessary to fulfill the purposes described in this policy, also respecting legal retention periods. Contact data for marketing is kept while there is an active relationship or until you request its removal.
          </p>
          <p className="mt-3">
            After the retention period, the information is securely deleted or anonymized.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>7. YOUR RIGHTS</strong>
          </h2>
          <p className="mt-3">
            You have the right to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Confirm whether we process your data and access it.</li>
            <li>Correct incomplete, inaccurate, or outdated information.</li>
            <li>Request the deletion of unnecessary or improperly processed data.</li>
            <li>Object to processing based on our legitimate interest.</li>
            <li>Request data portability, where applicable.</li>
            <li>Withdraw your consent at any time, when processing is based on it.</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, simply send an email to{" "}
            <a
              href="mailto:hello@figtheagency.com"
              className="underline transition hover:text-[#6f64ff]"
            >
              <strong>hello@figtheagency.com</strong>
            </a>
            . We will respond within reasonable timeframes and may request identity confirmation to ensure security.
          </p>
          <p className="mt-3">
            If you believe your rights have not been adequately addressed, you also have the possibility to lodge a complaint with the data protection authority in your country of residence or in the Netherlands.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>8. SECURITY</strong>
          </h2>
          <p className="mt-3">
            We adopt appropriate technical and organizational measures to protect your data against unauthorized access, loss, alteration, or improper disclosure. This includes encryption, access controls, and continuous monitoring of our systems.
          </p>
          <p className="mt-3">
            While we strive to maintain a secure environment, no system is completely invulnerable. In the event of a relevant incident, we will notify you and the authorities as required.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>9. CHANGES TO THIS POLICY</strong>
          </h2>
          <p className="mt-3">
            This Privacy Policy may be updated periodically. The date of the last revision will always be indicated at the beginning of the document. Significant changes will be communicated by email or through a prominent notice on our website.
          </p>
          <p className="mt-3">
            We recommend that you check this page regularly to stay informed about how we protect your information.
          </p>
        </div>

        <div>
          <h2 className="text-heading text-[#0e1020]">
            <strong>10. CONTACT</strong>
          </h2>
          <p className="mt-3">
            For questions, requests, or any matter related to privacy and data protection, please contact us:
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="mailto:hello@figtheagency.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0e1020]/20 text-[#0e1020] transition hover:bg-[#0e1020] hover:text-white"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://figtheagency.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0e1020]/20 text-[#0e1020] transition hover:bg-[#0e1020] hover:text-white"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
