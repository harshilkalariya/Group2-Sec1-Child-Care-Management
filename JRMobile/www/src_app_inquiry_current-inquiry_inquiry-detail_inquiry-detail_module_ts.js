"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inquiry_current-inquiry_inquiry-detail_inquiry-detail_module_ts"],{

/***/ 5908:
/*!********************************************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/inquiry-detail/inquiry-detail.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".currentInquiryDetailPage {\n  padding: 5px 20px 70px 20px;\n}\n.currentInquiryDetailPage .clieantAllDetail {\n  border-radius: 25px;\n  background-color: var(--card-backGround);\n  text-transform: capitalize;\n  box-shadow: 3px 3px 6px 0px rgba(var(--darkRGB), 0.15);\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail {\n  background-color: var(--card-backGround-dark);\n  border-radius: 25px;\n  box-shadow: 0px 4px 5px rgba(var(--darkRGB), 0.2);\n  color: var(--font-dark);\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .clientName {\n  padding: 10px 20px;\n  text-align: center;\n  font-size: 1.15rem;\n  border-bottom: 2px solid var(--card-border);\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore {\n  display: flex;\n  padding: 15px 20px;\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber {\n  flex-grow: 1;\n  border-right: 1px solid var(--card-border);\n  padding-right: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber .number {\n  display: flex;\n  padding-bottom: 5px;\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber .number .numberIcon {\n  padding-right: 5px;\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber .type {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber .type .typeIcon {\n  padding-bottom: 5px;\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .address {\n  flex-grow: 1;\n  padding-left: 10px;\n  display: flex;\n}\n.currentInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .address .addressIcon {\n  padding-right: 5px;\n}\n.currentInquiryDetailPage .clieantAllDetail .otherInformation {\n  padding: 20px;\n}\n.currentInquiryDetailPage .clieantAllDetail .otherInformation .dateAndType {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 5px;\n}\n.currentInquiryDetailPage .clieantAllDetail .otherInformation .inquiryByandOwner {\n  display: flex;\n  padding-bottom: 5px;\n}\n.currentInquiryDetailPage .clieantAllDetail .otherInformation .inquiryByandOwner .titleByandOwner {\n  min-width: 75px;\n  padding-right: 10px;\n}\n.currentInquiryDetailPage .clieantAllDetail .otherInformation .status {\n  width: 100%;\n  padding: 10px;\n  margin-top: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--font-gold);\n  border-radius: 25px;\n  background-color: var(--body);\n  box-shadow: inset -2px -2px 3px 0px rgba(var(--bodyRGB), 0.5), inset 2px 2px 5px 0px rgba(var(--darkRGB), 0.2);\n}\n.currentInquiryDetailPage .projectTimeLine {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 20px;\n  transform: translateX(-20px);\n}\n.currentInquiryDetailPage .projectTimeLine .text {\n  font-size: 1.15rem;\n  padding: 10px 25px 10px 20px;\n  color: var(--font-dark);\n  background-color: var(--dark);\n  border-left: none;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.currentInquiryDetailPage .waitingSvgBox {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.currentInquiryDetailPage .waitingSvgBox .waitingSvg {\n  width: 50%;\n}\n.currentInquiryDetailPage .waitingSvgBox .waitingSvg img {\n  width: 100%;\n  background-size: cover;\n}\n.currentInquiryDetailPage .timeline .timelineCard {\n  width: 100%;\n  margin-top: 20px;\n  background-color: var(--card-backGround);\n  border: 2px solid var(--card-border);\n  border-radius: 15px;\n  padding: 15px;\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine {\n  display: flex;\n  justify-content: space-between;\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine .cardDetail {\n  border-left: 5px solid var(--card-border);\n  padding: 5px 10px 5px 20px;\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine .cardDetail .cardName {\n  font-size: 1.15rem;\n  font-weight: 500;\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine .cardDetail .cardDate {\n  font-size: 0.85rem;\n  opacity: 0.6;\n  padding-top: 5px;\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine .cardDetail .cardDesc {\n  font-size: 0.9rem;\n  padding-top: 10px;\n  opacity: 0.9;\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine .completedActivity {\n  border-left: 5px solid var(--font-gold);\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine .icon {\n  display: flex;\n  align-items: center;\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine .doneIcon {\n  color: green;\n  font-size: 1.5rem;\n}\n.currentInquiryDetailPage .timeline .timelineCard .cardFirstLine .holdIcon {\n  color: #f5f504;\n  font-size: 1.5rem;\n}\n.currentInquiryDetailPage .timeline .timelineCard .inquiryAction {\n  padding: 10px 0px 5px 0px;\n}\n.currentInquiryDetailPage .timeline .timelineCard .inquiryAction .inquiryInput {\n  margin: 10px 10px 5px 10px;\n  border: 1px solid var(--font-gold);\n  border-radius: 10px;\n}\n.currentInquiryDetailPage .timeline .timelineCard .inquiryAction .inquiryInput ion-item {\n  border-radius: 10px;\n  --background: var(--card-backGround);\n}\n.currentInquiryDetailPage .timeline .timelineCard .inquiryAction .inquiryInput .item-has-focus {\n  --highlight-background: var(--font-gold);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucXVpcnktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtFQUNBLHNEQUFBO0FBQ0o7QUFDSTtFQUNFLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLHVCQUFBO0FBQ047QUFDTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBQ1I7QUFFTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRVE7RUFDRSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQVY7QUFFVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFaO0FBRVk7RUFDRSxrQkFBQTtBQUFkO0FBS1U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSFo7QUFLWTtFQUNFLG1CQUFBO0FBSGQ7QUFRUTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFOVjtBQVFVO0VBQ0Usa0JBQUE7QUFOWjtBQVlJO0VBQ0UsYUFBQTtBQVZOO0FBWU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVZSO0FBYU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWFRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBWFY7QUFlTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEdBQUE7QUFiUjtBQW1CRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQWpCSjtBQW1CSTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBakJOO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFuQko7QUFvQkk7RUFDRSxVQUFBO0FBbEJOO0FBb0JNO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBbEJSO0FBeUJJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXZCTjtBQXlCTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQXZCUjtBQXlCUTtFQUNFLHlDQUFBO0VBQ0EsMEJBQUE7QUF2QlY7QUF5QlU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBdkJaO0FBMEJVO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF4Qlo7QUEyQlU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXpCWjtBQTZCUTtFQUNFLHVDQUFBO0FBM0JWO0FBOEJRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBNUJWO0FBK0JRO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBN0JWO0FBZ0NRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBOUJWO0FBa0NNO0VBQ0UseUJBQUE7QUFoQ1I7QUFrQ1E7RUFDRSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFoQ1Y7QUFrQ1U7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0FBaENaO0FBbUNVO0VBQWdCLHdDQUFBO0FBaEMxQiIsImZpbGUiOiJpbnF1aXJ5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudElucXVpcnlEZXRhaWxQYWdlIHtcbiAgcGFkZGluZzogNXB4IDIwcHggNzBweCAyMHB4O1xuXG4gIC5jbGllYW50QWxsRGV0YWlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja0dyb3VuZCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggMHB4IHJnYmEodmFyKC0tZGFya1JHQiksIDAuMTUpO1xuXG4gICAgLmNsaWVudERldGFpbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tHcm91bmQtZGFyayk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggcmdiYSh2YXIoLS1kYXJrUkdCKSwgMC4yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1mb250LWRhcmspO1xuXG4gICAgICAuY2xpZW50TmFtZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgICB9XG5cbiAgICAgIC5udW1iZXJBZGRyZXNzTW9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcblxuICAgICAgICAubmFtZUFuZE51bWJlciB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAubnVtYmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICAgICAubnVtYmVySWNvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50eXBlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAudHlwZUljb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAuYWRkcmVzc0ljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5vdGhlckluZm9ybWF0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgIC5kYXRlQW5kVHlwZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIH1cblxuICAgICAgLmlucXVpcnlCeWFuZE93bmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgICAgICAudGl0bGVCeWFuZE93bmVyIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDc1cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhdHVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtZ29sZCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHkpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggM3B4IDBweCByZ2JhKHZhcigtLWJvZHlSR0IpLCAwLjUpLCBpbnNldCAycHggMnB4IDVweCAwcHggcmdiYSh2YXIoLS1kYXJrUkdCKSwgMC4yKTtcbiAgICAgICAgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcm9qZWN0VGltZUxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuXG4gICAgLnRleHQge1xuICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMjBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1mb250LWRhcmspO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLndhaXRpbmdTdmdCb3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC53YWl0aW5nU3Zne1xuICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGltZWxpbmUge1xuXG4gICAgLnRpbWVsaW5lQ2FyZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tHcm91bmQpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAgIC5jYXJkRmlyc3RMaW5lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC5jYXJkRGV0YWlsIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMjBweDtcblxuICAgICAgICAgIC5jYXJkTmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkRGF0ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkRGVzYyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wbGV0ZWRBY3Rpdml0eSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1mb250LWdvbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb25lSWNvbiB7XG4gICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhvbGRJY29uIHtcbiAgICAgICAgICBjb2xvcjogI2Y1ZjUwNDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuaW5xdWlyeUFjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDVweCAwcHg7XG5cbiAgICAgICAgLmlucXVpcnlJbnB1dCB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1nb2xkKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iYWNrR3JvdW5kKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXRlbS1oYXMtZm9jdXN7LS1oaWdobGlnaHQtYmFja2dyb3VuZDogdmFyKC0tZm9udC1nb2xkKTt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 7004:
/*!********************************************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/inquiry-detail/inquiry-detail.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/inquiry/current-inquiry\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>INQUIRY DETAIL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHeaderOnScroll]=\"header\">\n\n  <div class=\"currentInquiryDetailPage\" *ngIf=\"canLoad\">\n    <div class=\"clieantAllDetail\">\n      <div class=\"clientDetail\">\n        <div class=\"clientName\">\n          {{selectedInquiry?.firstName}} {{selectedInquiry?.lastName}}\n        </div>\n        <div class=\"numberAddressMore\">\n          <div class=\"nameAndNumber\">\n            <div class=\"number\">\n              <div class=\"numberIcon\">\n                <ion-icon name=\"call\"></ion-icon>\n              </div>\n              <div>\n                <div>{{selectedInquiry?.mobileNumber}}</div>\n                <div *ngIf=\"selectedInquiry?.secondNumber\">{{selectedInquiry?.secondNumber}}</div>\n              </div>\n            </div>\n            <div class=\"type\">\n              <div class=\"typeIcon\">\n                <ion-icon name=\"business\"></ion-icon>\n              </div>\n              <div>{{selectedInquiry?.inquiryType}}</div>\n            </div>\n          </div>\n          <div class=\"address\">\n            <div class=\"addressIcon\">\n              <ion-icon name=\"location\"></ion-icon>\n            </div>\n            <div>\n              <div>\n                {{selectedInquiry?.houseDetail}},\n              </div>\n              <div>\n                {{selectedInquiry?.areaDetail}},\n              </div>\n              <div>\n                {{selectedInquiry?.cityTitle}},\n                {{selectedInquiry?.districtTitle}},\n                {{selectedInquiry?.stateTitle}},\n              </div>\n              <div>\n                Pincode - {{selectedInquiry?.pincode}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"otherInformation\">\n        <div class=\"inquiryByandOwner\">\n          <div class=\"titleByandOwner\">Parent :</div>\n          <div>{{selectedInquiry?.businessName}}</div>\n        </div>\n        <!-- <div class=\"inquiryByandOwner\">\n          <div class=\"titleByandOwner\">Partner :</div>\n          <div>{{selectedInquiry?.ownerName}}</div>\n        </div> -->\n        <div class=\"inquiryByandOwner\" *ngIf=\"selectedInquiry?.interiorName\">\n          <div class=\"titleByandOwner\">Interior :</div>\n          <div>{{selectedInquiry?.interiorName}}</div>\n        </div>\n        <div class=\"status\">\n          {{selectedInquiry? getInquiryStageName(selectedInquiry.status) : ''}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"projectTimeLine\">\n      <div class=\"text\">\n        Project Status & Timeline\n      </div>\n    </div>\n\n    <div class=\"timeline\" *ngIf=\"timelineData\">\n      <div class=\"timelineCard\" *ngFor=\"let inquiry of timeline\">\n        <div class=\"cardFirstLine\">\n          <div class=\"cardDetail\" [ngClass]=\"{completedActivity: inquiry.date}\">\n            <div class=\"cardName\">{{inquiry.status}}</div>\n            <div class=\"cardDate\" *ngIf=\"inquiry.date\">{{inquiry.date | date:\"dd-MMM-yyyy hh:mm a\"}}</div>\n            <div class=\"cardDesc\" *ngIf=\"inquiry.desc\">{{inquiry.desc}}</div>\n          </div>\n          <div class=\"icon\" *ngIf=\"inquiry.status !=='Response By Client'\">\n            <div class=\"doneIcon\" *ngIf=\"inquiry.date\">\n              <ion-icon name=\"checkmark-circle\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"icon\" *ngIf=\"inquiry.status =='Response By Client'\">\n            <div class=\"doneIcon\" *ngIf=\"inquiry.date && selectedInquiry?.status !=='HOLD_BY_CLIENT'\">\n              <ion-icon name=\"checkmark-circle\"></ion-icon>\n            </div>\n            <div class=\"holdIcon\" *ngIf=\"inquiry.date && selectedInquiry?.status =='HOLD_BY_CLIENT'\">\n              <ion-icon name=\"alert-circle\"></ion-icon>\n            </div>\n          </div>\n        </div>\n\n        <!--! Action on Running Inquiry -->\n        <div *ngIf=\"selectedInquiry?.owner == ownerId && role !=='ROLE_RETAILER'\">\n\n          <!-- On Response by Client -->\n          <div *ngIf=\"selectedInquiry?.status =='APPROVED_BY_JR' && inquiry.status=='Response By Client'\">\n            <ion-row class=\" inquiryAction\">\n              <ion-col class=\"inquiryInput ion-no-padding\">\n                <ion-item>\n                  <ion-label position=\"stacked\">Feedback</ion-label>\n                  <ion-textarea auto-grow=\"true\" type=\"text\" [(ngModel)]=\"inquiryFeedback\"></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"inquiryInput  ion-no-padding\">\n              <ion-col size=\"12\">\n                <ion-button color=\"dark\" expand=\"block\"\n                  (click)=\"responseToInquiry('CONFIRMED_BY_CLIENT', selectedInquiry.enquiryId)\">Confirm by Client\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-button color=\"warning\" expand=\"block\" fill=\"outline\"\n                  (click)=\"holdAlert()\">Hold by Client</ion-button>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-button color=\"danger\" expand=\"block\" fill=\"clear\" (click)=\"cancelAlert()\">Cancel by Client\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <!-- on Hold -->\n          <div *ngIf=\"selectedInquiry?.status =='HOLD_BY_CLIENT' && inquiry.status=='Response By Client'\">\n            <ion-row class=\" inquiryAction\">\n              <ion-col class=\"inquiryInput  ion-no-padding\">\n                <ion-item>\n                  <ion-label position=\"stacked\">Feedback</ion-label>\n                  <ion-textarea auto-grow=\"true\" type=\"text\" [(ngModel)]=\"inquiryFeedback\"></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"inquiryInput\" *ngIf=\"selectedInquiry?.status =='HOLD_BY_CLIENT'\">\n              <ion-col size=\"12\">\n                <ion-button color=\"dark\" expand=\"block\"\n                  (click)=\"responseToInquiry('CONFIRMED_BY_CLIENT', selectedInquiry.enquiryId)\">Confirm by Client\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-button color=\"danger\" expand=\"block\" fill=\"clear\" (click)=\"cancelAlert()\">Cancel by Client\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n\n\n          <!-- on Provisioning -->\n          <div *ngIf=\"selectedInquiry?.status =='CONFIRMED_BY_CLIENT' && inquiry.status=='Provisioning'\">\n            <ion-row class=\" inquiryAction\">\n              <ion-col class=\"inquiryInput  ion-no-padding\">\n                <ion-item>\n                  <ion-label position=\"stacked\">Feedback</ion-label>\n                  <ion-textarea auto-grow=\"true\" type=\"text\" [(ngModel)]=\"inquiryFeedback\"></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"inquiryInput\">\n              <ion-col size=\"12\">\n                <ion-button color=\"dark\" expand=\"block\"\n                  (click)=\"responseToInquiry('PROVISIONING', selectedInquiry.enquiryId)\">Provisioning Done</ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <!-- on Requirement Collection -->\n          <div *ngIf=\"selectedInquiry?.status =='PROVISIONING' && inquiry.status=='Requirement Collection'\">\n            <ion-row class=\" inquiryAction\">\n              <ion-col class=\"inquiryInput ion-no-padding\">\n                <ion-item>\n                  <ion-label position=\"stacked\">Feedback</ion-label>\n                  <ion-textarea auto-grow=\"true\" type=\"text\" [(ngModel)]=\"inquiryFeedback\"></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"inquiryInput\">\n              <ion-col size=\"12\">\n                <ion-button color=\"dark\" expand=\"block\"\n                  (click)=\"responseToInquiry('REQUIREMENT', selectedInquiry.enquiryId)\">\n                  Requirement Collected</ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <!-- on Installation -->\n          <div *ngIf=\"selectedInquiry?.status =='REQUIREMENT' && inquiry.status=='Installation'\">\n            <ion-row class=\" inquiryAction\">\n              <ion-col class=\"inquiryInput ion-no-padding\">\n                <ion-item>\n                  <ion-label position=\"stacked\">Feedback</ion-label>\n                  <ion-textarea auto-grow=\"true\" type=\"text\" [(ngModel)]=\"inquiryFeedback\"></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"inquiryInput\">\n              <ion-col size=\"12\">\n                <ion-button color=\"dark\" expand=\"block\"\n                  (click)=\"responseToInquiry('INSTALLATION', selectedInquiry.enquiryId)\">Installation Completed\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <!-- on Commissioning and Training -->\n          <div *ngIf=\"selectedInquiry?.status =='INSTALLATION' && inquiry.status=='Commissioning & Training'\">\n            <ion-row class=\" inquiryAction\">\n              <ion-col class=\"inquiryInput ion-no-padding\">\n                <ion-item>\n                  <ion-label position=\"stacked\">Feedback</ion-label>\n                  <ion-textarea auto-grow=\"true\" type=\"text\" [(ngModel)]=\"inquiryFeedback\"></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"inquiryInput\">\n              <ion-col size=\"12\">\n                <ion-button color=\"dark\" expand=\"block\"\n                  (click)=\"responseToInquiry('COMMISSIONING', selectedInquiry.enquiryId)\">Commissioning & Training Done\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"waitingSvgBox\" *ngIf=\"!timelineData\">\n      <div class=\"waitingSvg\">\n        <img src=\"../../../../assets/waiting.svg\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 1981:
/*!*****************************************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/inquiry-detail/inquiry-detail-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryDetailPageRoutingModule": () => (/* binding */ InquiryDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inquiry_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry-detail.page */ 9864);




const routes = [
    {
        path: '',
        component: _inquiry_detail_page__WEBPACK_IMPORTED_MODULE_0__.InquiryDetailPage
    }
];
let InquiryDetailPageRoutingModule = class InquiryDetailPageRoutingModule {
};
InquiryDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InquiryDetailPageRoutingModule);



/***/ }),

/***/ 459:
/*!*********************************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/inquiry-detail/inquiry-detail.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryDetailPageModule": () => (/* binding */ InquiryDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../directives/header-on-scroll.module */ 6727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inquiry_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-detail-routing.module */ 1981);
/* harmony import */ var _inquiry_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inquiry-detail.page */ 9864);








let InquiryDetailPageModule = class InquiryDetailPageModule {
};
InquiryDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _inquiry_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.InquiryDetailPageRoutingModule,
            _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__.HeaderOnScroll
        ],
        declarations: [_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_2__.InquiryDetailPage]
    })
], InquiryDetailPageModule);



/***/ }),

/***/ 9864:
/*!*******************************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/inquiry-detail/inquiry-detail.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryDetailPage": () => (/* binding */ InquiryDetailPage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inquiry_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-detail.page.html?ngResource */ 7004);
/* harmony import */ var _inquiry_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inquiry-detail.page.scss?ngResource */ 5908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/inquiry/inquiry.service */ 1967);
/* harmony import */ var src_app_service_util_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/util/util.service */ 814);
/* harmony import */ var src_app_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/toast/toast.service */ 4747);
/* harmony import */ var src_app_constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constant/inquiryConstant */ 2131);
/* harmony import */ var src_app_service_local_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/local-storage/localstorage.service */ 3546);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);












let InquiryDetailPage = class InquiryDetailPage {
  constructor(inquiryService, utilService, router, toastService, localStorage, alertController) {
    this.inquiryService = inquiryService;
    this.utilService = utilService;
    this.router = router;
    this.toastService = toastService;
    this.localStorage = localStorage;
    this.alertController = alertController;
    this.canLoad = false;
    this.timelineData = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let currentUser = yield _this.localStorage.getValue('currentUser');
      _this.ownerId = currentUser.ownerId;
      _this.role = currentUser.role;
      _this.inquirySubscription = _this.utilService.getInquiry().subscribe(res => {
        if (res && !res.enquiryId) {
          _this.router.navigate(['/tabs/inquiry/current-inquiry']);
        }

        if (res && res.enquiryId) {
          _this.selectedInquiry = res;
          _this.canLoad = true;

          _this.getInquiryDetailByInquiryId(_this.selectedInquiry.enquiryId);
        }
      });
    })();
  }

  getInquiryDetailByInquiryId(inquiryId) {
    var _this2 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.selectedInquiryDetails = yield _this2.inquiryService.getInquiryDetailByInquiryId(inquiryId);
      _this2.timeline = [{
        status: 'Inquiry Created On',
        date: _this2.selectedInquiryDetails.createdOn,
        desc: _this2.selectedInquiryDetails.description
      }, {
        status: 'Response By Company',
        date: _this2.selectedInquiryDetails.approveRejectDateByAdmin,
        desc: _this2.selectedInquiryDetails.jrDesc
      }, {
        status: 'Response By Client',
        date: _this2.selectedInquiryDetails.approveRejectDateBySiteManager,
        desc: _this2.selectedInquiryDetails.clientDesc
      }, {
        status: 'Provisioning',
        date: _this2.selectedInquiryDetails.provisioningDate,
        desc: _this2.selectedInquiryDetails.provisioningDesc
      }, {
        status: 'Requirement Collection',
        date: _this2.selectedInquiryDetails.requirementDate,
        desc: _this2.selectedInquiryDetails.requirementDesc
      }, {
        status: 'Installation',
        date: _this2.selectedInquiryDetails.installationDate,
        desc: _this2.selectedInquiryDetails.installationDesc
      }, {
        status: 'Commissioning & Training',
        date: _this2.selectedInquiryDetails.commissioningDate,
        desc: _this2.selectedInquiryDetails.commissionindDesc
      }, {
        status: 'Completed',
        date: _this2.selectedInquiryDetails.completedDate,
        desc: _this2.selectedInquiryDetails.completedDesc
      }];
      _this2.timelineData = true;
    })();
  }

  getInquiryStageName(stage) {
    return src_app_constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_6__.InquiryStages[stage].name;
  }

  responseToInquiry(response, inquiryId) {
    var _this3 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.inquiryResponse = {
        id: inquiryId,
        status: response,
        desc: _this3.inquiryFeedback
      };

      try {
        let response = yield _this3.inquiryService.changeInquiryStatus(_this3.inquiryResponse);

        _this3.toastService.success(response.message);

        _this3.inquiryFeedback = '';

        _this3.router.navigate(['/tabs/inquiry/current-inquiry']);
      } catch (error) {
        _this3.toastService.error(error.error.message);
      }
    })();
  }

  holdAlert() {
    var _this4 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: 'Are you sure to Hold Project?',
        buttons: [{
          text: 'Close',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'Confirm',
          role: 'confirm',
          cssClass: 'alert-button-confirm-danger',
          handler: function () {
            var _ref = (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this4.responseToInquiry('HOLD_BY_CLIENT', _this4.selectedInquiry.enquiryId);
            });

            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }]
      });
      yield alert.present();
    })();
  }

  cancelAlert() {
    var _this5 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        header: 'Are you sure to Cancel Project?',
        buttons: [{
          text: 'Close',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'Confirm',
          role: 'confirm',
          cssClass: 'alert-button-confirm-danger',
          handler: function () {
            var _ref2 = (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this5.responseToInquiry("CANCEL_BY_CLIENT", _this5.selectedInquiry.enquiryId);
            });

            return function handler() {
              return _ref2.apply(this, arguments);
            };
          }()
        }]
      });
      yield alert.present();
    })();
  }

  ngOnDestroy() {
    this.inquirySubscription.unsubscribe();
  }

};

InquiryDetailPage.ctorParameters = () => [{
  type: src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_3__.InquiryService
}, {
  type: src_app_service_util_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: src_app_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
}, {
  type: src_app_service_local_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}];

InquiryDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-inquiry-detail',
  template: _inquiry_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewEncapsulation.None,
  styles: [_inquiry_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], InquiryDetailPage);


/***/ })

}]);
//# sourceMappingURL=src_app_inquiry_current-inquiry_inquiry-detail_inquiry-detail_module_ts.js.map