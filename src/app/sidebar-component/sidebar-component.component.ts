import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css']
})
export class SidebarComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      //var allPanels = $('.nav child_menu').hide();
      
      $('.menuItem').click(function() {
      var  $this=$(this); 
      $this.next().slideUp();
      $this.next().slideToggle();
      
      }); 
    });
  

  }

}
