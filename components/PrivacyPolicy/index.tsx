import React from 'react';

import styles from './styles.module.css';


const PrivacyPolicy: React.FC = () => {
  return (
    <section className={styles.privacyPolicyContainer}>
      <h1 className={styles.privacyPolicyHeader}>Privacy Policy</h1>
      <span className={styles.effectiveDate}>Effective Date: 4th of April, 2021</span>
      <p>
        Your privacy is important to us, we are committed to protecting your privacy.
        We do not collect or send any kind of personally identifiable information, except for information required to create a profile within on Annie and for analytics.
        We only ask for information when we truly need it to provide a service to you.
        We collect it by fair and lawful means, with your knowledge and consent.
      </p>

      <p>
        The information we collect to provide a service to you may be shared with Apple, Google,
        Spotify and other streaming platforms (per the Apple Music, YouTube and Spotify APIs…) in
        order to process your request, but not for any other purposes.
      </p>

      <p>
        You can always revoke Annie’s access to your data on any of the services you use via
        the service itself and can also contact Annie with any questions or complaints.
      </p>

      <p>
        The application may collect anonymous data related to actions performed on the
        application (such as queries and shared links) for purposes of improving the service.
      </p>

      <p>
        We only retain collected information for as long as necessary to provide
        you with your requested service. What data we store, we’ll protect within commercially
        acceptable means to prevent loss and theft, as well as unauthorised access,
        disclosure, copying, use or modification.
      </p>

      <p>
        We don’t share any personally identifying information publicly or
        with third-parties, except when required to by law.
      </p>

      <p>
        Anniemusic may link to external sites that are not operated by us.
        Please be aware that we have no control over the content and practices of
        these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>

      <p>
        You are free to refuse our request for your personal information,
        with the understanding that we may be unable to provide you with
        some of your desired services.
      </p>

      <h3>Warranty and Limitation of Liability</h3>
      <p className={styles.warrantyLimitationText}>
        The APPLICATION DEVELOPER PROVIDES THE SOFTWARE AND THE SERVICES &quot;AS IS&quot; WITHOUT
        WARRANTY OF ANY KIND EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING BUT NOT LIMITED TO THE
        IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. ALL RISK OF
        QUALITY AND PERFORMANCE OF THE SOFTWARE OR SERVICES REMAINS WITH YOU.
      </p>

      <p className={styles.warrantyLimitationText}>
        BY USING THIS APPLICATION, YOU AGREE TO THE TERMS PROVIDED IN THIS DISCLAIMER AND THE FOLLOWING
        LIMITATION OF LIABILITY DISCLAIMER. IN NO EVENT WILL THE APPLICATION DEVELOPER, ITS EMPLOYEES,
        DISTRIBUTORS, DIRECTORS OR AGENTS BE LIABLE FOR ANY INDIRECT DAMAGES OR OTHER RELIEF ARISING
        OUT OF YOUR USE OR INABILITY TO USE THE SOFTWARE OR SERVICES INCLUDING, BY WAY OF ILLUSTRATION
        AND NOT LIMITATION, LOST PROFITS, LOST BUSINESS OR LOST OPPORTUNITY, OR ANY INDIRECT, SPECIAL,
        INCIDENTAL OR CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING LEGAL FEES, ARISING OUT OF SUCH
        USE OR INABILITY TO USE THE PROGRAM, EVEN IF THE APPLICATION DEVELOPER HAS BEEN ADVISED OF
        THE POSSIBILITY OF SUCH DAMAGES, OR FOR ANY CLAIM BY ANY OTHER PARTY.
      </p>

      <p className={styles.warrantyLimitationText}>
        BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL
        OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, THE APPLICATION DEVELOPER&apos;S LIABILITY
        SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.
      </p>

      <p>
        Your continued use of our website will be regarded as acceptance of our practices around
        privacy and personal information. If you have any questions about how we handle user data and
        personal information, feel free to contact us.
      </p>
      <br />
      <br />
    </section>
  )
}

export default PrivacyPolicy;
