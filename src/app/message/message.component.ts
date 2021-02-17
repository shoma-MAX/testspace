import { Component, OnInit } from "@angular/core";
import { Postcode } from "../../../postcode";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  postcode: Postcode = {
    postcode1: "123",
    postcode2: "123"
  };

  constructor() {}

  ngOnInit() {}
  isDisable = true;
  /**
   * 
   */
  async onChange(postcode1: string, postcode2: string) {
    if (
      postcode1.length == 3 &&
      (postcode2.length == 4 || postcode2.length == 0)
    ) {
      this.isDisable = false;
    } else {
      this.isDisable = true;
    }

    if(postcode1.length==3){
      document.getElementById("myTextField").focus();
    }
  }

  async onClick(postcode1, postcode2) {
    console.log(postcode1 + "-" + postcode2);
  }
}
