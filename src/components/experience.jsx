import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/experience.css';


class Experience extends Component {
    render() {
      return (
        <div className="experience-container" id="experience">
          <div className="experience-header">
            <h1>Experience</h1>
          </div>
          <Tabs >
            <TabList>
              <Tab>Meta Inc.</Tab>
              <Tab>Amazon Web Services Inc.</Tab>
              <Tab>Duke GCB</Tab>
              <Tab>Duke Impact Investing Group</Tab>
              <Tab>Kline & Co.</Tab>
            </TabList>

            <TabPanel>
              <div className="job-position">Software Engineer Intern @ Meta (formerly Facebook)</div>
              <div className="location">New York, NY</div>
              <div className="dates">May 2022 - Aug 2022</div>
              <div className="bullet-list">
                <ul>
                  <li>
                  Implemented A/B testing framework to support new multi-merchant recommendation model for injected feed units under shoppable media on Instagram’s home feed, pending upper-level ship decision
                  </li>

                  <li>
                  Built out product tagging appeals pages using Bloks on the Instagram app for sellers as part of Meta's business integrity workflows
                  </li>

                  <li>
                  Upgraded internal tooling to support debugging views for seller promotions and discounts on the Instagram storefront
                  </li>
                </ul>
              </div>   
            </TabPanel>

            <TabPanel>
              <div className="job-position">Software Development Engineer Intern @ AWS</div>
              <div className="location">Boston, MA</div>
              <div className="dates">May 2021 - Aug 2021</div>
              <div className="bullet-list">
                <ul>
                  <li>
                  Generated proof of concepts for an early-stage sales outcome machine learning platform for Amazon Web Services (AWS) 
                  to streamline customer workload migrations to the cloud
                  </li>

                  <li>
                  Leveraged AWS EC2, S3, and Sagemaker to build and deploy logistic regression propensity models 
                  predicting a customer’s likelihood to use AWS services
                  </li>

                  <li>
                  Achieved over 80% accuracy, recall, and precision
                  </li>
                </ul>
              </div>   
            </TabPanel>

            <TabPanel>
            <div className="job-position">Computational Research Assistant @ Allen Lab</div>
              <div className="location">Durham, NC</div>

              <div className="dates">Jun 2020 - Present </div>
              <div className="bullet-list">
                <ul>
                  <li>
                  1 of 15 recipients of the Duke Biological Sciences Undergraduate Research Fellowship in Summer of 2020
                  </li>

                  <li>
                  Wrote Python scripts to extract thousands of identified somatic mutations from ICGC data repositories
                  </li>

                  <li>
                  Developed and implemented biocomputational algorithms to classify CRISPR-screen hits as non-coding oncogenic mutations
                  </li>

                  <li>
                    Currently working to establish a null model based on trinucleotide mutation rate probabilities as a control, gearing for eventual publication 
                  </li>
                </ul>
              </div>   
            </TabPanel>

            <TabPanel>
              <div className="job-position"> Data Analyst @ Duke Impact Investing Group </div>
                <div className="location">Durham, NC</div>
                <div className="dates">Jan - May 2021</div>
                <div className="bullet-list">
                  <ul>
                    <li>
                      Undertook a pro-bono project for Ginger.io, an online mental health service, to uncover insights on product usage
                    </li>

                    <li>
                      Performed data ingestion with company backlogs to analyze coach behavior and inform a redesign of the patient UI
                    </li>
                  </ul>
                </div>
            </TabPanel>
            <TabPanel>
            <div className="job-position"> Data Analytics Intern @ Kline & Co.</div>
                <div className="location">Stowe, MA</div>
                <div className="dates">June - August 2018, 2019</div>
                <div className="bullet-list">
                  <ul>
                    <li>
                    Developed an algorithm using economic census data to build a predictive model of U.S oil demand for ExxonMobil
                    </li>

                    <li>
                    Wrote script automating data sorting process, shortened project timeframe from three months to two weeks
                    </li>
                  </ul>
                </div>
            </TabPanel>

          </Tabs>
        </div>
        
      )
    }
  }
  

  export default Experience; 