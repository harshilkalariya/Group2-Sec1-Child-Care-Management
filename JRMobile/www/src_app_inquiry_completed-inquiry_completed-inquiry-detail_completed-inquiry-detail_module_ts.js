"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inquiry_completed-inquiry_completed-inquiry-detail_completed-inquiry-detail_module_ts"],{

/***/ 4026:
/*!******************************************************************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry-detail/completed-inquiry-detail.page.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = ".completedInquiryDetailPage {\n  padding: 5px 20px 70px 20px;\n}\n.completedInquiryDetailPage .clieantAllDetail {\n  border-radius: 25px;\n  background-color: var(--card-backGround);\n  text-transform: capitalize;\n  box-shadow: 3px 3px 6px 0px rgba(var(--darkRGB), 0.15);\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail {\n  background-color: var(--card-backGround-dark);\n  border-radius: 25px;\n  box-shadow: 0px 4px 5px rgba(var(--darkRGB), 0.2);\n  color: var(--font-dark);\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .clientName {\n  padding: 10px 20px;\n  text-align: center;\n  font-size: 1.15rem;\n  border-bottom: 2px solid var(--card-border);\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore {\n  display: flex;\n  padding: 15px 20px;\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber {\n  flex-grow: 1;\n  border-right: 1px solid var(--card-border);\n  padding-right: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber .number {\n  display: flex;\n  padding-bottom: 5px;\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber .number .numberIcon {\n  padding-right: 5px;\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber .type {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .nameAndNumber .type .typeIcon {\n  padding-bottom: 5px;\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .address {\n  flex-grow: 1;\n  padding-left: 10px;\n  display: flex;\n}\n.completedInquiryDetailPage .clieantAllDetail .clientDetail .numberAddressMore .address .addressIcon {\n  padding-right: 5px;\n}\n.completedInquiryDetailPage .clieantAllDetail .otherInformation {\n  padding: 20px;\n}\n.completedInquiryDetailPage .clieantAllDetail .otherInformation .dateAndType {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 5px;\n}\n.completedInquiryDetailPage .clieantAllDetail .otherInformation .inquiryByandOwner {\n  display: flex;\n  padding-bottom: 5px;\n}\n.completedInquiryDetailPage .clieantAllDetail .otherInformation .inquiryByandOwner .titleByandOwner {\n  min-width: 75px;\n  padding-right: 10px;\n}\n.completedInquiryDetailPage .clieantAllDetail .otherInformation .status {\n  width: 100%;\n  padding: 10px;\n  margin-top: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--font-gold);\n  border-radius: 25px;\n  background-color: var(--body);\n  box-shadow: inset -2px -2px 3px 0px rgba(var(--bodyRGB), 0.5), inset 2px 2px 5px 0px rgba(var(--darkRGB), 0.2);\n}\n.completedInquiryDetailPage .projectTimeLine {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 20px;\n  transform: translateX(-20px);\n}\n.completedInquiryDetailPage .projectTimeLine .text {\n  font-size: 1.15rem;\n  padding: 10px 25px 10px 20px;\n  color: var(--font-dark);\n  background-color: var(--dark);\n  border-left: none;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n.completedInquiryDetailPage .waitingSvgBox {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.completedInquiryDetailPage .waitingSvgBox .waitingSvg {\n  width: 50%;\n}\n.completedInquiryDetailPage .waitingSvgBox .waitingSvg img {\n  width: 100%;\n  background-size: cover;\n}\n.completedInquiryDetailPage .timeline .timelineCard {\n  width: 100%;\n  margin-top: 20px;\n  background-color: var(--card-backGround);\n  border: 2px solid var(--card-border);\n  border-radius: 15px;\n  padding: 15px;\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine {\n  display: flex;\n  justify-content: space-between;\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine .cardDetail {\n  border-left: 5px solid var(--card-border);\n  padding: 5px 10px 5px 20px;\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine .cardDetail .cardName {\n  font-size: 1.15rem;\n  font-weight: 500;\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine .cardDetail .cardDate {\n  font-size: 0.85rem;\n  opacity: 0.6;\n  padding-top: 5px;\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine .cardDetail .cardDesc {\n  font-size: 0.9rem;\n  padding-top: 10px;\n  opacity: 0.9;\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine .completedActivity {\n  border-left: 5px solid var(--font-gold);\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine .icon {\n  display: flex;\n  align-items: center;\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine .doneIcon {\n  color: green;\n  font-size: 1.5rem;\n}\n.completedInquiryDetailPage .timeline .timelineCard .cardFirstLine .rejectIcon {\n  color: red;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlZC1pbnF1aXJ5LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxzREFBQTtBQUNKO0FBQ0k7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSx1QkFBQTtBQUNOO0FBQ007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQUNSO0FBRU07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFWO0FBRVU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBWjtBQUVZO0VBQ0Usa0JBQUE7QUFBZDtBQUtVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1k7RUFDRSxtQkFBQTtBQUhkO0FBUVE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBTlY7QUFRVTtFQUNFLGtCQUFBO0FBTlo7QUFZSTtFQUNFLGFBQUE7QUFWTjtBQVlNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQWFNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBWFI7QUFhUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQVhWO0FBZU07RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhHQUFBO0FBYlI7QUFvQkU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFsQko7QUFvQkk7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQWxCTjtBQXNCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBcEJKO0FBc0JJO0VBQ0UsVUFBQTtBQXBCTjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQXBCUjtBQTJCSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUF6Qk47QUEyQk07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUF6QlI7QUEyQlE7RUFDRSx5Q0FBQTtFQUNBLDBCQUFBO0FBekJWO0FBMkJVO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQXpCWjtBQTRCVTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBMUJaO0FBNkJVO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUEzQlo7QUErQlE7RUFDRSx1Q0FBQTtBQTdCVjtBQWdDUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQTlCVjtBQWlDUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQS9CVjtBQWtDUTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQWhDViIsImZpbGUiOiJjb21wbGV0ZWQtaW5xdWlyeS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXRlZElucXVpcnlEZXRhaWxQYWdlIHtcbiAgcGFkZGluZzogNXB4IDIwcHggNzBweCAyMHB4O1xuXG4gIC5jbGllYW50QWxsRGV0YWlsIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja0dyb3VuZCk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggMHB4IHJnYmEodmFyKC0tZGFya1JHQiksIDAuMTUpO1xuXG4gICAgLmNsaWVudERldGFpbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tHcm91bmQtZGFyayk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggcmdiYSh2YXIoLS1kYXJrUkdCKSwgMC4yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1mb250LWRhcmspO1xuXG4gICAgICAuY2xpZW50TmFtZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgICB9XG5cbiAgICAgIC5udW1iZXJBZGRyZXNzTW9yZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcblxuICAgICAgICAubmFtZUFuZE51bWJlciB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAubnVtYmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICAgICAubnVtYmVySWNvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50eXBlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAudHlwZUljb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAuYWRkcmVzc0ljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5vdGhlckluZm9ybWF0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgIC5kYXRlQW5kVHlwZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIH1cblxuICAgICAgLmlucXVpcnlCeWFuZE93bmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgICAgICAudGl0bGVCeWFuZE93bmVyIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDc1cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhdHVzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtZ29sZCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHkpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMnB4IC0ycHggM3B4IDBweCByZ2JhKHZhcigtLWJvZHlSR0IpLCAwLjUpLCBpbnNldCAycHggMnB4IDVweCAwcHggcmdiYSh2YXIoLS1kYXJrUkdCKSwgMC4yKTtcbiAgICAgICAgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLnByb2plY3RUaW1lTGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG5cbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICBwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICB9XG4gIH1cblxuICAud2FpdGluZ1N2Z0JveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgLndhaXRpbmdTdmcge1xuICAgICAgd2lkdGg6IDUwJTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRpbWVsaW5lIHtcblxuICAgIC50aW1lbGluZUNhcmQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrR3JvdW5kKTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAuY2FyZEZpcnN0TGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuY2FyZERldGFpbCB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlcik7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDIwcHg7XG5cbiAgICAgICAgICAuY2FyZE5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZERhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZERlc2Mge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGxldGVkQWN0aXZpdHkge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tZm9udC1nb2xkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZG9uZUljb24ge1xuICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWplY3RJY29uIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 9023:
/*!******************************************************************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry-detail/completed-inquiry-detail.page.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/inquiry/completed-inquiry\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>PROJECT DETAIL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHeaderOnScroll]=\"header\">\n\n  <div class=\"completedInquiryDetailPage\" *ngIf=\"canLoad\">\n    <div class=\"clieantAllDetail\">\n      <div class=\"clientDetail\">\n        <div class=\"clientName\">\n          {{selectedInquiry?.firstName}} {{selectedInquiry?.lastName}}\n        </div>\n        <div class=\"numberAddressMore\">\n          <div class=\"nameAndNumber\">\n            <div class=\"number\">\n              <div class=\"numberIcon\">\n                <ion-icon name=\"call\"></ion-icon>\n              </div>\n              <div>\n                <div>{{selectedInquiry?.mobileNumber}}</div>\n                <div *ngIf=\"selectedInquiry?.secondNumber\">{{selectedInquiry?.secondNumber}}</div>\n              </div>\n            </div>\n            <div class=\"type\">\n              <div class=\"typeIcon\">\n                <ion-icon name=\"business\"></ion-icon>\n              </div>\n              <div>{{selectedInquiry?.inquiryType}}</div>\n            </div>\n          </div>\n          <div class=\"address\">\n            <div class=\"addressIcon\">\n              <ion-icon name=\"location\"></ion-icon>\n            </div>\n            <div>\n              <div>\n                {{selectedInquiry?.houseDetail}},\n              </div>\n              <div>\n                {{selectedInquiry?.areaDetail}},\n              </div>\n              <div>\n                {{selectedInquiry?.cityTitle}},\n                {{selectedInquiry?.districtTitle}},\n                {{selectedInquiry?.stateTitle}},\n              </div>\n              <div>\n                Pincode - {{selectedInquiry?.pincode}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"otherInformation\">\n        <div class=\"inquiryByandOwner\">\n          <div class=\"titleByandOwner\">Parent :</div>\n          <div>{{selectedInquiry?.businessName}}</div>\n        </div>\n        <!-- <div class=\"inquiryByandOwner\">\n          <div class=\"titleByandOwner\">Partner :</div>\n          <div>{{selectedInquiry?.ownerName}}</div>\n        </div> -->\n        <div class=\"inquiryByandOwner\" *ngIf=\"selectedInquiry?.interiorName\">\n          <div class=\"titleByandOwner\">Interior :</div>\n          <div>{{selectedInquiry?.interiorName}}</div>\n        </div>\n        <div class=\"status\">\n          {{selectedInquiry? getInquiryStageName(selectedInquiry.status) : ''}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"projectTimeLine\">\n      <div class=\"text\">\n        Project Status & Timeline\n      </div>\n    </div>\n\n    <div class=\"timeline\" *ngIf=\"timelineData\">\n      <ng-container *ngFor=\"let inquiry of timeline\">\n        <div class=\"timelineCard\" *ngIf=\"inquiry.date\">\n          <div class=\"cardFirstLine\">\n            <div class=\"cardDetail\" [ngClass]=\"{completedActivity: inquiry.date}\">\n              <div class=\"cardName\">{{inquiry.status}}</div>\n              <div class=\"cardDate\" *ngIf=\"inquiry.date\">{{inquiry.date | date:\"dd-MMM-yyyy hh:mm a\"}}</div>\n              <div class=\"cardDesc\" *ngIf=\"inquiry.desc\">{{inquiry.desc}}</div>\n            </div>\n            <div class=\"icon\"\n              *ngIf=\"inquiry.status !=='Response By Client' && inquiry.status !=='Response By Company' \">\n              <div class=\"doneIcon\" *ngIf=\"inquiry.date\">\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"icon\" *ngIf=\"inquiry.status =='Response By Client'\">\n              <div class=\"doneIcon\" *ngIf=\"inquiry.date && selectedInquiry?.status !=='CANCEL_BY_CLIENT'\">\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\n              </div>\n              <div class=\"rejectIcon\" *ngIf=\"inquiry.date && selectedInquiry?.status =='CANCEL_BY_CLIENT'\">\n                <ion-icon name=\"close-circle\"></ion-icon>\n              </div>\n            </div>\n            <div class=\"icon\" *ngIf=\"inquiry.status =='Response By Company'\">\n              <div class=\"doneIcon\" *ngIf=\"inquiry.date && selectedInquiry?.status !=='REJECTED_BY_JR'\">\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\n              </div>\n              <div class=\"rejectIcon\" *ngIf=\"inquiry.date && selectedInquiry?.status =='REJECTED_BY_JR'\">\n                <ion-icon name=\"close-circle\"></ion-icon>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n\n    <div class=\"waitingSvgBox\" *ngIf=\"!timelineData\">\n      <div class=\"waitingSvg\">\n        <img src=\"../../../../assets/waiting.svg\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 5828:
/*!***************************************************************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry-detail/completed-inquiry-detail-routing.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedInquiryDetailPageRoutingModule": () => (/* binding */ CompletedInquiryDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _completed_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed-inquiry-detail.page */ 7489);




const routes = [
    {
        path: '',
        component: _completed_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_0__.CompletedInquiryDetailPage
    }
];
let CompletedInquiryDetailPageRoutingModule = class CompletedInquiryDetailPageRoutingModule {
};
CompletedInquiryDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompletedInquiryDetailPageRoutingModule);



/***/ }),

/***/ 5785:
/*!*******************************************************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry-detail/completed-inquiry-detail.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedInquiryDetailPageModule": () => (/* binding */ CompletedInquiryDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../directives/header-on-scroll.module */ 6727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _completed_inquiry_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed-inquiry-detail-routing.module */ 5828);
/* harmony import */ var _completed_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completed-inquiry-detail.page */ 7489);








let CompletedInquiryDetailPageModule = class CompletedInquiryDetailPageModule {
};
CompletedInquiryDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _completed_inquiry_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.CompletedInquiryDetailPageRoutingModule,
            _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__.HeaderOnScroll
        ],
        declarations: [_completed_inquiry_detail_page__WEBPACK_IMPORTED_MODULE_2__.CompletedInquiryDetailPage]
    })
], CompletedInquiryDetailPageModule);



/***/ }),

/***/ 7489:
/*!*****************************************************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry-detail/completed-inquiry-detail.page.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedInquiryDetailPage": () => (/* binding */ CompletedInquiryDetailPage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _completed_inquiry_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed-inquiry-detail.page.html?ngResource */ 9023);
/* harmony import */ var _completed_inquiry_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completed-inquiry-detail.page.scss?ngResource */ 4026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constant/inquiryConstant */ 2131);
/* harmony import */ var src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/inquiry/inquiry.service */ 1967);
/* harmony import */ var src_app_service_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/util/util.service */ 814);









let CompletedInquiryDetailPage = class CompletedInquiryDetailPage {
  constructor(inquiryService, utilService, router) {
    this.inquiryService = inquiryService;
    this.utilService = utilService;
    this.router = router;
    this.canLoad = false;
    this.timelineData = false;
  }

  ngOnInit() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.inquirySubscription = _this.utilService.getInquiry().subscribe(res => {
        if (res && !res.enquiryId) {
          _this.router.navigate(['/tabs/inquiry/completed-inquiry']);
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
    return src_app_constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_3__.InquiryStages[stage].name;
  }

  ngOnDestroy() {
    this.inquirySubscription.unsubscribe();
  }

};

CompletedInquiryDetailPage.ctorParameters = () => [{
  type: src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_4__.InquiryService
}, {
  type: src_app_service_util_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

CompletedInquiryDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-completed-inquiry-detail',
  template: _completed_inquiry_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewEncapsulation.None,
  styles: [_completed_inquiry_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CompletedInquiryDetailPage);


/***/ })

}]);
//# sourceMappingURL=src_app_inquiry_completed-inquiry_completed-inquiry-detail_completed-inquiry-detail_module_ts.js.map