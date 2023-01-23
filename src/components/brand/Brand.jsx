import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="Google" />
    </div>
    <div>
      <img src={slack} alt="Slack" />
    </div>
    <div>
      <img src={atlassian} alt="Atlassian" />
    </div>
    <div>
      <img src={dropbox} alt="Dropbox" />
    </div>
    <div>
      <img src={shopify} alt="Shopify" />
    </div>
  </div>
);

export default Brand;