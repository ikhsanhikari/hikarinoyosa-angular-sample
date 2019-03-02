import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../models/mahasiswa.model';
import { HikariService } from '../hikari.service';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Cars } from '../models/cars.model';


@Component({
  selector: 'app-hikari-content',
  templateUrl: './hikari-content.component.html',
  styleUrls: ['./hikari-content.component.css']
})
export class HikariContentComponent implements OnInit {
  carsFormGroup = new FormGroup(
    {
      vin: new FormControl(''),
      brand: new FormControl(''),
      year: new FormControl(''),
      color: new FormControl(''),
      prices: new FormControl(''),
      type: new FormControl(''),
  });
  carsTamp: Cars[];
  // dataSource=this.carsService.getCars();
  displayedColumns: string[] = ['vin', 'brand', 'year','color','prices','type','Action'];
  mhs2: Mahasiswa[]=[{nim:"111",nama:"aaaa",alamat:"aaa",ttl:new Date}];
  
  
  panelOpenState = false;
  constructor(private hikariService: HikariService,
    private route: ActivatedRoute,
    private carsService:CarsService) { }

  ngOnInit() {
    this.getCars();
  }
  getMahasiswa():void{
    this.hikariService.getMahasiswa().subscribe(mhs2 => this.mhs2=mhs2) ;
  }
  getMahasiswaById():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.hikariService.getMahasiswaById(id).subscribe(mhs3 => this.mhs2=mhs3)  ;
  }
  getCars():void{
    this.carsService.getCars().subscribe(cars =>this.carsTamp=cars);
  }
  saveCars():void{
    console.log(this.carsFormGroup.value);
    this.carsService.addCars
    (this.carsFormGroup.value).subscribe(car => this.carsTamp.push(car));
  }

  onSubmit(){
    this.saveCars();
    // this.getCars();
  }
  onDelete(vin:string){
    console.log(vin);
    this.carsService.deleteCars(vin).subscribe();
  }

}
