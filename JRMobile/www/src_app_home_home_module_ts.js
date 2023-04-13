"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".homePage {\n  height: 100%;\n  padding: 25px 20px 70px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.homePage .welcomeMsg {\n  min-height: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.homePage .welcomeMsg .hiMsg {\n  font-size: 1.3rem;\n  padding-bottom: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.homePage .welcomeMsg .greetings {\n  font-size: 0.9rem;\n  padding-bottom: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.homePage .jrIntro {\n  flex-grow: 1;\n  max-height: 140px;\n  padding: 10px;\n  display: flex;\n  border: 2px solid var(--card-backGround-dark);\n  background-color: var(--card-backGround-dark);\n  border-radius: 25px;\n}\n.homePage .jrIntro .jrCardInfo {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 0px 0px 20px;\n}\n.homePage .jrIntro .jrCardInfo .infoWelcome {\n  font-size: 1.3rem;\n  padding-bottom: 10px;\n  color: var(--font-dark);\n}\n.homePage .jrIntro .jrCardInfo .infoNote {\n  font-size: 0.95rem;\n  color: var(--font-dark);\n}\n.homePage .jrIntro .jrCardAnnouncements {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0px 0px 0px 0px;\n}\n.homePage .jrIntro .jrCardAnnouncements .infoWelcome {\n  font-size: 1.3rem;\n  padding-bottom: 10px;\n  color: var(--font-dark);\n  margin: auto;\n}\n.homePage .jrIntro .jrCardAnnouncements .infoNote {\n  font-size: 0.95rem;\n  color: var(--font-dark);\n  padding: 0px 0px 0px 10px;\n}\n.homePage .jrIntro .jrIllustrater {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 0px 20px 0px 10px;\n  position: relative;\n}\n.homePage .jrIntro .jrIllustrater img {\n  position: absolute;\n  height: calc(100% + 49px);\n  background-size: cover;\n}\n.homePage .ongoing {\n  flex-grow: 1.3;\n}\n.homePage .ongoing .ongoingProjectLine {\n  font-size: 1.2rem;\n  padding-bottom: 10px;\n  padding-top: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n.homePage .ongoing .ongoingProjectLine .viewAllBtn {\n  font-size: 0.75rem;\n  padding: 3px 10px 2px;\n  background-color: var(--card-backGround);\n  border: 1px solid var(--card-border);\n  border-radius: 6px;\n}\n.homePage .ongoing .noMoreSvgBox {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n}\n.homePage .ongoing .noMoreSvgBox .noMoreSvg {\n  width: 50%;\n}\n.homePage .ongoing .noMoreSvgBox .noMoreSvg img {\n  width: 100%;\n  background-size: cover;\n}\n.homePage .ongoing .noMoreSvgBox .noMsg {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-top: 20px;\n  opacity: 0.8;\n}\n.homePage .ongoing .homeInfo {\n  height: calc(100% - 37px);\n  display: grid;\n  gap: 15px;\n  grid-template-columns: repeat(2, calc((100% - 15px) / 2)) !important;\n  grid-template-rows: repeat(2, calc((100% - 15px) / 2)) !important;\n}\n.homePage .ongoing .homeInfo .ongoingCard {\n  padding: 10px;\n  border: 2px solid var(--card-border);\n  border-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.homePage .ongoing .homeInfo .ongoingCard .dateLine {\n  border-bottom: 1px solid var(--card-border);\n  display: flex;\n  justify-content: space-between;\n}\n.homePage .ongoing .homeInfo .ongoingCard .cardDate {\n  text-align: end;\n  font-size: 0.8rem;\n}\n.homePage .ongoing .homeInfo .ongoingCard .personrIcon {\n  font-size: 2.5rem;\n  color: var(--font-gold);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 5px;\n}\n.homePage .ongoing .homeInfo .ongoingCard .fullName {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.homePage .ongoing .homeInfo .ongoingCard .fullName .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.homePage .ongoing .homeInfo .ongoingCard .cardStatus {\n  min-height: 38px;\n  font-size: 0.75rem;\n  background-color: var(--card-backGround);\n  padding: 5px 10px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.homePage .ongoing .homeInfo .ongoingCard .cardStatus span {\n  text-align: center;\n}\n.homePage .newInquiryCard {\n  min-height: 45px;\n  max-height: 100px;\n  flex-grow: 1;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--card-backGround);\n  border: 2px solid var(--card-border);\n  border-radius: 25px;\n}\n.homePage .newInquiryCard .addInquiryBg {\n  position: absolute;\n  inset: 0;\n  border-radius: 25px;\n  -moz-filter: blur(2px);\n  -o-filter: blur(2px);\n  -ms-filter: blur(2px);\n  filter: blur(2px);\n}\n.homePage .newInquiryCard .addInquiryBg img {\n  background-size: cover;\n  width: 100%;\n  opacity: 0.25;\n  transform: scale(2.5);\n  z-index: 1;\n}\n.homePage .newInquiryCard .newInquiryText {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.25rem;\n  z-index: 10;\n}\n.homePage .newInquiryCard .newInquiryText .plusSign {\n  height: 30px;\n  padding-right: 20px;\n  filter: drop-shadow(0 0 1px rgba(34, 34, 34, 0.411));\n}\n.homePage .newInquiryCard .newInquiryText .plusSign img {\n  height: 100%;\n  background-size: cover;\n}\n.homePage .waitingSvgBox {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n.homePage .waitingSvgBox .waitingSvg {\n  width: 60%;\n}\n.homePage .waitingSvgBox .waitingSvg img {\n  width: 100%;\n  background-size: cover;\n}\n@media (max-height: 700px) {\n  .homePage .newInquiryCard {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFBO0VBQ0EsbUJBQUE7RUFFQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQTdCTjtBQStCTTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUE3QlI7QUFpQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUEvQk47QUFpQ007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtBQS9CUjtBQWlDUTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQS9CVjtBQXFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBbkNKO0FBcUNJO0VBQ0UsVUFBQTtBQW5DTjtBQXFDTTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQW5DUjtBQXlDQTtFQUNFO0lBQ0UsYUFBQTtFQXRDRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVQYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyNXB4IDIwcHggNzBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG5cbiAgLndlbGNvbWVNc2cge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmhpTXNnIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgLmdyZWV0aW5ncyB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgfVxuXG4gIC5qckludHJvIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LWhlaWdodDogMTQwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmQtYmFja0dyb3VuZC1kYXJrKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tHcm91bmQtZGFyayk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcblxuICAgIC5qckNhcmRJbmZvIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMjBweDtcblxuICAgICAgLmluZm9XZWxjb21lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcbiAgICAgIH1cblxuICAgICAgLmluZm9Ob3RlIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuanJDYXJkQW5ub3VuY2VtZW50cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG5cbiAgICAgIC5pbmZvV2VsY29tZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cblxuICAgICAgLmluZm9Ob3RlIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1kYXJrKTtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuanJJbGx1c3RyYXRlciB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZzogMHB4IDIwcHggMHB4IDEwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gbWF4LWhlaWdodDogMTQ1cHg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgNDlweCk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm9uZ29pbmcge1xuICAgIGZsZXgtZ3JvdzogMS4zO1xuXG4gICAgLm9uZ29pbmdQcm9qZWN0TGluZSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC52aWV3QWxsQnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweCAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja0dyb3VuZCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ub01vcmVTdmdCb3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgICAubm9Nb3JlU3ZnIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5vTXNnIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaG9tZUluZm8ge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzN3B4KTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBnYXA6IDE1cHg7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBjYWxjKCgxMDAlIC0gMTVweCkgLyAyKSkgIWltcG9ydGFudDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGNhbGMoKDEwMCUgLSAxNXB4KSAvIDIpKSAhaW1wb3J0YW50O1xuXG5cbiAgICAgIC5vbmdvaW5nQ2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC5kYXRlTGluZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkRGF0ZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBlcnNvbnJJY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1nb2xkKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGxOYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkU3RhdHVzIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tHcm91bmQpO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5ld0lucXVpcnlDYXJkIHtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrR3JvdW5kKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcblxuICAgIC5hZGRJbnF1aXJ5Qmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgIC1tb3otZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAtby1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgIC1tcy1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgIGZpbHRlcjogYmx1cigycHgpO1xuXG4gICAgICBpbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uZXdJbnF1aXJ5VGV4dCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgei1pbmRleDogMTA7XG5cbiAgICAgIC5wbHVzU2lnbiB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMXB4IHJnYmEoMzQsIDM0LCAzNCwgMC40MTEpKTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLndhaXRpbmdTdmdCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgIC53YWl0aW5nU3ZnIHtcbiAgICAgIHdpZHRoOiA2MCU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XG4gIC5ob21lUGFnZSAubmV3SW5xdWlyeUNhcmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 8610:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <div class=\"homePage\">\n    <div class=\"welcomeMsg\">\n      <div class=\"hiMsg\">Hi {{userName}}!</div>\n      <div class=\"greetings\">{{greetMsg}}</div>\n    </div>\n\n    <div class=\"jrIntro\">\n      <div class=\"jrCardInfo\">\n        <div class=\"infoWelcome\">Welcome!</div>\n        <div class=\"infoNote\"> To the JR child care solution</div>\n      </div>\n      <div class=\"jrIllustrater\"><img src=\"../../assets/jrMobileHome 1.svg\" alt=\"\"></div>\n    </div>\n\n    <div class=\"jrIntro\">\n      <div class=\"jrCardAnnouncements\">\n        <div class=\"infoWelcome\">Announcements!</div>\n        <div class=\"infoNote\"> This is new announcement form Instructor</div>\n      </div>\n    </div>\n\n    <div class=\"ongoing\" *ngIf=\"canLoad\">\n      <div class=\"ongoingProjectLine\">\n        <div>Current Inquiries</div>\n        <div class=\"viewAllBtn ion-activatable ripple-parent\" (click)=\"viewAllRunningProject()\">View All\n          <ion-ripple-effect></ion-ripple-effect>\n        </div>\n      </div>\n\n      <div *ngIf=\"inquiryList && inquiryList.length < 1\">\n        <div class=\"noMoreSvgBox\">\n          <div class=\"noMoreSvg\">\n            <img src=\"../../../../assets/waiting.svg\" alt=\"\">\n          </div>\n          <div class=\"noMsg\">\n            No Any In Process Inquiries\n          </div>\n        </div>\n      </div>\n\n      <div class=\"homeInfo\" *ngIf=\"inquiryList && inquiryList.length > 0\">\n        <div class=\"ongoingCard\" *ngFor=\"let inquiry of fourInquiry\">\n          <ion-row>\n            <ion-col class=\"dateLine\">\n              <div>\n                <ion-icon name=\"calendar-outline\"></ion-icon>\n              </div>\n              <div class=\"cardDate\">{{inquiry.createdOn | date:\"dd-MMM-yyyy\"}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"personrIcon ion-no-padding\" size=\"3\">\n              <ion-icon name=\"person-circle-outline\"></ion-icon>\n            </ion-col>\n            <ion-col class=\"fullName ion-no-padding\" size=\"9\">\n              <div class=\"name\">{{inquiry.firstName}}</div>\n              <div class=\"name\">{{inquiry.lastName}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-no-padding\">\n              <div class=\"cardStatus\">\n                <span>{{getInquiryStageName(inquiry.status)}}</span>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"newInquiryCard ion-activatable ripple-parent\" (click)=\"goToNewInquiry()\" *ngIf=\"canLoad\">\n      <div class=\"addInquiryBg\">\n        <img src=\"../../assets/Hexagon.svg\" alt=\"\">\n      </div>\n      <div class=\"newInquiryText\">\n        <div class=\"plusSign\"><img src=\"../../assets/plusSign.png\" alt=\"\"></div>\n        Register Your Child\n      </div>\n      <ion-ripple-effect></ion-ripple-effect>\n    </div>\n\n    <div class=\"waitingSvgBox\" *ngIf=\"!canLoad\">\n      <div class=\"waitingSvg\">\n        <img src=\"../../../../assets/waiting.svg\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8610);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _service_local_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service/local-storage/localstorage.service */ 3546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/inquiryConstant */ 2131);
/* harmony import */ var _service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/inquiry/inquiry.service */ 1967);









let HomePage = class HomePage {
  constructor(router, inquiryService, localStorage) {
    this.router = router;
    this.inquiryService = inquiryService;
    this.localStorage = localStorage;
    this.canLoad = false;
    this.greetingsByTime();
  }

  ngOnInit() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let currentUser = yield _this.localStorage.getValue('currentUser');
      _this.userName = currentUser.businessName;

      _this.getCurrentInquiryList();
    })();
  }

  getCurrentInquiryList() {
    var _this2 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let list = yield _this2.inquiryService.getAllInquiryList(1, '');
      _this2.inquiryList = list.list;
      _this2.fourInquiry = _this2.inquiryList.slice(0, 4);
      _this2.canLoad = true;
    })();
  }

  getInquiryStageName(stage) {
    return _constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_4__.InquiryStages[stage].name;
  }

  viewAllRunningProject() {
    this.router.navigate(['/tabs/inquiry/current-inquiry']);
  }

  goToNewInquiry() {
    this.router.navigate(['/tabs/inquiry/new-inquiry']);
  }

  greetingsByTime() {
    let myDate = new Date();
    let hrs = myDate.getHours();
    if (hrs < 12) this.greetMsg = 'Good Morning';else if (hrs >= 12 && hrs <= 17) this.greetMsg = 'Good Afternoon';else if (hrs >= 17 && hrs <= 24) this.greetMsg = 'Good Evening';
  }

};

HomePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_5__.InquiryService
}, {
  type: _service_local_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewEncapsulation.None,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map