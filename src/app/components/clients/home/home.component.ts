import {Component, OnInit} from '@angular/core';
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  heart = faHeart;
  bag = faShoppingBag;
  retweet = faRetweet;
  activeFilter: string = '';

  listProductNewest : any;
  listProductPrice: any;

  showDepartment = false;
  displayedProducts: any[] = [];

  products = [
    { department: 'oranges', image: 'assets/image/featured/feature-1.jpg', name: 'Crab Pool Security', price: 30.00 },
    { department: 'vegetables', image: 'assets/image/featured/feature-2.jpg', name: 'Crab Pool Security', price: 30.00 },
    { department: 'vegetables', image: 'assets/image/featured/feature-3.jpg', name: 'Crab Pool Security', price: 30.00 },
    { department: 'fastfood', image: 'assets/image/featured/feature-4.jpg', name: 'Crab Pool Security', price: 30.00 },
    { department: 'fresh-meat', image: 'assets/image/featured/feature-5.jpg', name: 'Crab Pool Security', price: 30.00 },
    { department: 'oranges', image: 'assets/image/featured/feature-6.jpg', name: 'Crab Pool Security', price: 30.00 },
    { department: 'fresh-meat', image: 'assets/image/featured/feature-7.jpg', name: 'Crab Pool Security', price: 30.00 },
    { department: 'oranges', image: 'assets/image/featured/feature-8.jpg', name: 'Crab Pool Security', price: 30.00 }
    // Add other product objects here
  ];



  category_items_response= [

    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }

  ]

  category_items = [
    {
      id: 1,
      src: 'assets/image/cat-1.jpg',
      alt: '',
      title: 'Fresh Fruit'
    },
    {
      id: 2,
      src: 'assets/image/cat-2.jpg',
      alt: '',
      title: 'Dried Fruit'
    },
    {
      id: 3,
      src: 'assets/image/cat-3.jpg',
      alt: '',
      title: 'Vegetables'
    },
    {
      id: 4,
      src: 'assets/image/cat-4.jpg',
      alt: '',
      title: 'Drink Fruits'
    },
    {
      id: 5,
      src: 'assets/image/cat-5.jpg',
      alt: '',
      title: 'Fresh Meat'
    }
  ] ;

  constructor(
    private messageService: MessageService,
  ) {
  }
  ngOnInit(): void {
    // Khởi tạo displayedProducts với tất cả các sản phẩm
    this.displayedProducts = this.products;

  }

  showDepartmentClick(filter: string): void {
    this.activeFilter = filter;

    // Lọc sản phẩm dựa trên phòng ban được chọn
    if (filter === 'all') {
      this.displayedProducts = this.products;
    } else {
      this.displayedProducts = this.products.filter(product => product.department === filter);
    }
  }



  showSuccess(text: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: text});
  }
  showError(text: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: text});
  }

  showWarn(text: string) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: text});
  }

}
