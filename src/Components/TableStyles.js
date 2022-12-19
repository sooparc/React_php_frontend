import styled from "styled-components";

export const Styles = styled.div`
  .averageBtn {
    margin-top: 30px;
    background-color: #205a80;
    color: #fff;
    padding: 5px 20px;
    border: 1px solid #205a80;
    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 1.5px;
  }

  .averageNum {
    margin-top: 30px;
    margin-left: 10px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .table {
    margin-top: 10vh;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;

    .tr {
      :last-child {
        .td {
          border-bottom: 1;
        }
      }
    }

    .th {
      height: 60px;
      line-height: 20px;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 2px;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #205a80;
      color: #fff;
      overflow: hidden;
    }

    .td {
      text-align: center;
      font-size: 13px;
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #fff;
      overflow: hidden;

      :last-child {
        border-right: 0;
      }
    }

    .footerTd {
      text-align: center;
      font-size: 13px;
      font-weight: bold;
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #eee;
    }

    &.sticky {
      overflow: scroll;
      .header {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;
