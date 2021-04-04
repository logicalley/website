import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';


const TermsOfUse: React.FC = () => {
  const googlePrivacyUrl: string = 'https://policies.google.com/privacy?hl=en-US';

  return (
    <section>
      <h1>Terms of Use</h1>

      <ol>
        <li>Terms</li>
        <div className={styles.textGroup}>
          <span className={styles.docText}>Annie is a product of Logic Alley Ltd and uses a website with the domain name <Link href="/"><a className={styles.annieHomeLink}>https://anniemusic.app</a></Link>.</span>
          <span className={styles.docText}>This terms of service regulate the use of the website <Link href="/"><a className={styles.annieHomeLink}>https://anniemusic.app</a></Link>. and the use of the Annie Music product on other platforms.</span>
          <span className={styles.docText}>
            By accessing Annie through the website at <Link href="/"><a className={styles.annieHomeLink}>https://anniemusic.app</a></Link>, the app or other platforms, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </span>
        </div>

        <li>Use of License</li>
        <div className={styles.textGroup}>
          <ul>
            <li>
              <span className={styles.docText}>
                By using Annie, Permission is granted to access the materials (information or software) on Anniemusic's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </span>

              <ul>
                <li>
                  <span className={styles.docText}>
                    modify the materials;
                  </span>
                </li>

                <li>
                  <span className={styles.docText}>
                    use the materials for any commercial purpose;
                  </span>
                </li>

                <li>
                  <span className={styles.docText}>
                    remove any copyright or other proprietary notations from the materials;
                  </span>
                </li>

                <li>
                  <span className={styles.docText}>
                    attempt to decompile or reverse engineer any software contained on anniemusic's website;
                  </span>
                </li>

                <li>
                  <span className={styles.docText}>
                    All the content on https://anniemusic.app is copyrighted and belongs to Logic Alley Ltd.
                  </span>
                </li>
              </ul>
            </li>

            <li>
              <span className={styles.docText}>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by anniemusic at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </span>
            </li>
          </ul>
        </div>

        <li>Disclaimer</li>
        <div className={styles.textGroup}>
          <ul>
            <li>
              <span className={styles.docText}>
                The materials on Anniemusic's website are provided on an 'as is' basis. we make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </span>
            </li>

            <li>
              <span className={styles.docText}>
                Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the website or otherwise relating to such materials or on any sites linked to this site.
              </span>
            </li>
          </ul>
        </div>

        <li>Limitations</li>
        <div className={styles.textGroup}>
          <span className={styles.docText}>
            In no event shall we or our data source be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on anniemusic's website, even if Anniemusic or a "Anniemusic" authorized representative has been notified orally or in writing of the possibility of such damage.<br />
            Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </span>
        </div>

        <li>Accuracy of Information</li>
        <div className={styles.textGroup}>
          <span className={styles.docText}>
            The materials appearing on anniemusic's website could include technical, typographical, or photographic errors.<br />
            We do not warrant that any of the materials on its website are accurate, complete or current.
            We may make changes to the materials contained on its website at any time without notice. However anniemusic does not make any commitment to update the materials.
          </span>
        </div>

        <li>Links</li>
        <div className={styles.textGroup}>
          <span className={styles.docText}>
            We have not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.<br />
            The inclusion of any link does not imply endorsement by anniemusic of the site.
            Use of any such linked website is at the user's own risk.
          </span>
        </div>

        <li>Modifications</li>
        <div className={styles.textGroup}>
          <span className={styles.docText}>
            We may revise these terms of service for Anniemusic's website at any time without notice.
            By using this website you are agreeing to be bound by the then current version of these terms of service.
          </span>
        </div>

        <li>Third-Party platform</li>
        <div className={styles.textGroup}>
          <span className={styles.docText}>
            This service is in no way associated with YouTube, YouTube Music, Spotify, Google Play Music, Apple Music, Amazon Music, Deezer, last.fm, KKBOX, Pandora, Tidal, SoundCloud.
          </span>
        </div>

        <li>Third Party Terms of Service</li>
        <div className={styles.textGroup}>
          <span className={styles.docText}>
            <span className="bold">Youtube</span> - By using anniemusic, You are agreeing to be bound by the YouTube Terms Of Service. Anniemusic uses the YouTube API Services.
            Please also checkout <a href={googlePrivacyUrl} className={styles.plainLink}>Google Privacy Policy</a>.
            Anniemusic uses YouTube user information to access, provide and display YouTube data on Anniemusic. Anniemusic will be able to retrieve user YouTube username, user private playlists, liked videos, uploaded videos and subscribed channels. User data is only used to provide Anniemusic services and are not shared with any external service. You can always revoke Anniemusic's access to your data via the Google security settings page and can also contact Anniemusic with any questions or complaints <Link href="/contact"><a className={styles.plainLink}>here</a></Link>.
          </span>

          <span className={styles.docText}>
            <span className="bold">Spotify</span> - By using Anniemusic, You are agreeing to be bound by the Spotify Terms and Conditions of Use.
            Anniemusic uses the Spotify API Services. Anniemusic uses Spotify user information to access, provide and display Spotify datas on anniemusic. Anniemusic will be able to retrieve user Spotify username, user private playlists, liked tracks, liked albums and liked artists. User data is only used to provide Anniemusic services and are not shared with any external service. You can always revoke Anniemusic's access to your data via the Spotify Apps with access to your Spotify information page and can also contact Anniemusic with any questions or complaints <Link href="/contact"><a className={styles.plainLink}>here</a></Link>.
          </span>
        </div>
      </ol>
    </section>
  )
}

export default TermsOfUse;
