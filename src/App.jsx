import React, { Component } from 'react'

class PageHeader extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GithubLogo"
                />
              </a>
            </li>
            <li>
              <a href="#">Octodex</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </li>
          </ul>
        </nav>
        ​
        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/">Back to GitHub.com</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

class PageFooter extends Component {
  render() {
    return (
      <footer>
        <div>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

class OctoCat extends Component {
  render() {
    return (
      <article>
        <figure>
          <a href={this.props.aHRef1}>
            <img src={this.props.catImg} width="400" height="400" />
          </a>
        </figure>
        <ul>
          <li>
            <p>{this.props.catNumber}</p>
            <a href={this.props.aHRef2}>
              <strong>{this.props.catName} </strong>
            </a>
          </li>
          <li>
            <a href={this.props.aHRef3}>
              <img src={this.props.userIcon} width="24" height="24" />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <main>
          <OctoCat
            aHRef1="https://octodex.github.com//terracottocat/"
            catImg="https://octodex.github.com//images/Terracottocat_Single.png"
            catNumber="#149:"
            aHRef2="https://octodex.github.com//terracottocat/"
            catName="Terracottocat"
            aHRef3="https://github.com/chubbmo"
            userIcon="https://github.com/chubbmo.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//octogatos/"
            catImg="https://octodex.github.com//images/Octogatos.png"
            catNumber="#148:"
            aHRef2="https://octodex.github.com//octogatos/"
            catName="Octogatos"
            aHRef3="https://github.com/cameronfoxly"
            userIcon="https://github.com/cameronfoxly.png"
          />
          ​
          <OctoCat
            aHRef1="https://octodex.github.com//sentrytocat/"
            catImg="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            catNumber="#143:"
            aHRef2="https://octodex.github.com//sentrytocat/"
            catName="Sentrytocat"
            aHRef3="https://github.com/cameronmcefee"
            userIcon="https://github.com/cameronmcefee.png"
          />
          ​
          <OctoCat
            aHRef1="https://octodex.github.com//boxerocat/"
            catImg="https://octodex.github.com//images/boxertocat_octodex.jpg"
            catNumber="#141:"
            aHRef2="https://octodex.github.com//boxertocat/"
            catName="Boxertocat"
            aHRef3="https://github.com/rubyjazzy"
            userIcon="https://github.com/rubyjazzy.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//surftocat/"
            catImg="https://octodex.github.com//images/surftocat.png"
            catNumber="#140:"
            aHRef2="https://octodex.github.com//surftocat/"
            catName="Surftocat"
            aHRef3="https://github.com/jeejkang"
            userIcon="https://github.com/jeejkang.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//scubatocat/"
            catImg="https://octodex.github.com//images/scubatocat.png"
            catNumber="#138:"
            aHRef2="https://octodex.github.com//scubatocat/"
            catName="Scubtocat"
            aHRef3="https://github.com/cameronfoxly"
            userIcon="https://github.com/cameronfoxly.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//dinotocat/"
            catImg="https://octodex.github.com//images/dinotocat.png"
            catNumber="#130:"
            aHRef2="https://octodex.github.com//dinotocat/"
            catName="Dinotocat"
            aHRef3="https://github.com/kimestoesta"
            userIcon="https://github.com/kimestoesta.png"
          />
          ​ ​
          {/* <a href="https://github.com/heyhayhay">
                  <img
                    src="https://github.com/heyhayhay.png"
                    width="24"
                    height="24"
                    alt="heyhayhay"
                  /> */}
          <OctoCat
            aHRef1="https://octodex.github.com//spidertocat/"
            catImg="https://octodex.github.com//images/spidertocat.png"
            catNumber="#88:"
            aHRef2="https://octodex.github.com//spidertocat/"
            catName="Sentrytocat"
            aHRef3="https://github.com/jeejkang"
            userIcon="https://github.com/jeejkang.png"
          />
          ​
        </main>
        <PageFooter />
      </>
    )
  }
}

export default App
