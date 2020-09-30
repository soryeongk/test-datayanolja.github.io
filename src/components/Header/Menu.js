import React, { Component } from "react";
import $ from "jquery";
import "../Header/Menu.css";

class Menu extends Component {
  componentDidMount() {
    $(".menu")
      .each(function (index) {
        console.log("each 구문 실행");
        $(this).attr("menu-index", index);
      })
      .click(function () {
        var index = $(this).attr("menu-index");
        $(".menu[menu-index=" + index + "]").addClass("clicked");
        $(".menu[menu-index!=" + index + "]").removeClass("clicked");
      });

    // $(".sub-menu-a")
    //   .each(function (index) {
    //     $(this).attr("menu-index", index);
    //   })
    //   .click(function () {
    //     var index = $(this).attr("menu-index");
    //     $(".sub-menu-a[menu-index=" + index + "]").addClass("clicked");
    //   });
  }

  render() {
    return (
      <ul id="main-menu">
        <li>
          <a href="/" className="menu">
            ABOUT US
          </a>
          <ul id="sub-menu" className="about-sub">
            <li>
              <a
                href="/"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("speaker");
                }.bind(this)}
              >
                데놀 즐기기
              </a>
            </li>

            <li>
              <a
                href="/"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("partners");
                }.bind(this)}
              >
                함께하는 파트너스
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="/"
            className="menu"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("concept");
            }.bind(this)}
          >
            EVENT
          </a>
          <ul id="sub-menu" className="event-sub">
            <li>
              <a
                href="/program"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("program");
                }.bind(this)}
              >
                프로그램
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="/coc"
            className="menu"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("coc");
            }.bind(this)}
          >
            COC
          </a>
        </li>

        <li>
          <a href="/" className="menu">
            NEWSLETTER
          </a>
          <ul id="sub-menu" className="news-sub">
            <li>
              <a href="https://stib.ee/MWQ2">뉴스레터 1회차</a>
            </li>

            <li>
              <a href="https://stib.ee/ILT2">뉴스레터 2회차</a>
            </li>

            <li>
              <a href="https://stib.ee/BOU2">뉴스레터 3회차</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://event-us.kr/datayanolja2020/event/23268" className="menu">
            TICKET
          </a>
        </li>
        {/* <li>
        <a
            href="/"
            className="menu"
            onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode("archieve");
            }.bind(this)}
        >
            ARCHIEVE
        </a>
        </li> */}
      </ul>
    );
  }
}

export default Menu;
