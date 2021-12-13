import { Link, useLoaderData } from "remix";
import { LoaderFunction } from "remix";
import { db } from "~/utils/db.server";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src="https://i.redd.it/a6g2v0xi0pe41.png"
                className="user-img"
              />
              <h4>Eric Simons</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    My Articles
                  </a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="">
                  <img src="https://i.redd.it/a6g2v0xi0pe41.png" />
                </a>
                <div className="info">
                  <a href="" className="author">
                    Eric Simons
                  </a>
                </div>
              </div>
              <a href="" className="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
