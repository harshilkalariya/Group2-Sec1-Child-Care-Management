import { NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TitleCasePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InquiryInputData } from 'src/app/models/inquiry.model';
import { CityList, DistrictList, StateList, } from 'src/app/models/location.model';
import { InquiryService } from 'src/app/service/inquiry/inquiry.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-new-inquiry',
  templateUrl: './new-inquiry.page.html',
  styleUrls: ['./new-inquiry.page.scss'],
})
export class NewInquiryPage implements OnInit {
  newInquiryInput: any;
  newInquiryData: InquiryInputData;
  isInvalid: boolean = false;
  isNew: boolean = true;
  stateList: StateList[];
  districtList: DistrictList[];
  cityList: CityList[];
  btnHandler: Subscription;
  dateOfBirth = new Date().toISOString();

  @ViewChild('inquiryForm') private inquiryForm: NgForm;

  constructor(
    private fb: FormBuilder,
    private inquiryService: InquiryService,
    private titlecasePipe: TitleCasePipe,
    private toastService: ToastService,
    private router: Router,
    private navCtrl: NavController,
    private platform: Platform
  ) {
    this.newInquiryInput = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+1-?)|0)?[0-9]{10}$')],],
      secondNumber: ['', [Validators.pattern('^((\\+1-?)|0)?[0-9]{10}$')]],
      houseDetail: ['', [Validators.required]],
      areaDetail: ['', [Validators.required]],
      stateId: [null, [Validators.required]],
      districtId: [{ value: null, disabled: true }, [Validators.required]],
      locationId: [{ value: null, disabled: true }, [Validators.required]],
      pincode: ['', [Validators.required]],
      dateOfBirth: ['']
      // interiorDetail: [''],
      // inquiryType: ['', [Validators.required]],
      // description: [''],
    });
  }

  get inq() {
    return this.newInquiryInput.controls;
  }

  async ngOnInit(): Promise<void> { }

  async ionViewWillEnter() {
    await this.getAllStateData();
    this.btnHandler = this.platform.backButton.subscribeWithPriority(1, () => {
      this.navCtrl.navigateBack("tabs/inquiry")
    });
  }

  async getAllStateData() {
    this.stateList = await this.inquiryService.getAllState();
  }

  async getDistrictByState(event: any) {
    if (this.isNew) {
      this.districtList = await this.inquiryService.getDistrictListForState(event);
      this.newInquiryInput.controls['districtId'].enable()
    }
  }

  async getCityByDistrict(event: any) {
    if (this.isNew) {
      this.cityList = await this.inquiryService.getCityListForDistrict(event);
      this.newInquiryInput.controls['locationId'].enable()
    }
  }

  async addNewInquiry() {
    debugger;
    console.log('calling');
    console.log(this.newInquiryInput);
    if (this.newInquiryInput.invalid) {
      this.isInvalid = true;
    }
    if (this.newInquiryInput.valid) {
      this.newInquiryData = {
        firstName: this.titlecasePipe.transform(this.newInquiryInput.value['firstName'].trim()),
        lastName: this.titlecasePipe.transform(this.newInquiryInput.value['lastName'].trim()),
        mobileNumber: this.newInquiryInput.value['mobileNumber'],
        secondNumber: this.newInquiryInput.value['secondNumber'],
        houseDetail: this.titlecasePipe.transform(this.newInquiryInput.value['houseDetail'].trim()),
        areaDetail: this.titlecasePipe.transform(this.newInquiryInput.value['areaDetail'].trim()),
        stateId: +(this.newInquiryInput.value['stateId']),
        districtId: +(this.newInquiryInput.value['districtId']),
        cityId: +(this.newInquiryInput.value['locationId']),
        pincode: this.newInquiryInput.value['pincode'],
        dateOfBirth: new Date(this.dateOfBirth)
        // interiorName: this.titlecasePipe.transform(this.newInquiryInput.value['interiorDetail'].trim()),
        // inquiryType: this.newInquiryInput.value['inquiryType'],
        // description: this.newInquiryInput.value['description'].trim(),
      }
      try {
        await this.inquiryService.generateInquiry(this.newInquiryData);
        this.isInvalid = false;
        this.isNew = false;
        this.inquiryForm.resetForm();
        this.newInquiryInput.reset();
        this.isNew = true;
        this.toastService.success('Inquiry created succesfully');
        this.router.navigate(['stripe']);
      } catch (error: any) {
        this.toastService.error(error.error.message);
      }
    }
  }

  async ionViewDidLeave() {
    if (this.btnHandler) {
      this.btnHandler.unsubscribe();
    }
  }
}
