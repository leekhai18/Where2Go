import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  private data = [
    {
      id: '1', name: 'Khu du lịch Văn hóa Suối Tiên', address: '120 Xa lộ Hà Nội, Phường Tân Phú, Quận 9, Hồ Chí Minh, Việt Nam',
      costNeed: '200.000 VND', describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
      pictures: ['assets/images/posts/1_0.JPG', 'assets/images/posts/1_1.JPG', 'assets/images/posts/1_2.JPG', 'assets/images/posts/1_3.JPG'],
      datePosted: '02/01/2017',
      likeNumber: '124',
      commentNumber: '7',
      comments: ['1', '2', '3', '4', '5', '6', '7']
    }, {
      id: '2', name: 'Công viên Văn hoá Đầm Sen', address: 'Số 3 Hòa Bình, Phường 3, Quận 11, Hồ Chí Minh, Việt Nam',
      costNeed: '300.000 VND', describe: 'Công viên Văn hoá Đầm Sen là công viên giải trí nằm trên đường Hòa Bình, Quận 11, Thành phố Hồ Chí Minh. Công viên có diện tích 50 hecta gồm 20% là mặt hồ và 60% cây xanh và vườn hoa. Toàn công viên trải dài trên một diện tích rộng gồm 30 khu vực: Khu trò chơi điện tử, Sân khấu cổ tích, Lâu đài cổ tích, Sân khấu quảng trường, Hồ Tây thu nhỏ, Nam tú thượng uyển, Non bộ - thủy cung, Ðảo khiêu vũ, Nhà sinh vật biển, Rối nước, Vườn chim thiên nhiên, Chùa cổ Giác Viên, Vườn bướm thiên nhiên(đã đóng cửa), Khu câu cá, Khu trưng bày kỳ long, Quán trà đạo, Khu trò chơi mạo hiểm, Hồ thiên nga, Hồ ngựa phi, Vườn hoa châu Âu, Quảng trường La Mã, Quảng trường văn hoá, Sân khấu nhạc nước, Khu bowling, Khu dịch vụ thể thao, Hồ câu tôm, Nhà hàng thủy tạ, Khu trò chơi thiếu nhi, Ðèn tạo hình, Cầu cửu khúc, Nhà ga Monorail, đường ray Monorail, câu cá sấu, băng đăng...',
      pictures: ['assets/images/posts/2_0.JPG', 'assets/images/posts/2_1.JPG', 'assets/images/posts/2_2.JPG', 'assets/images/posts/2_3.JPG', 'assets/images/posts/2_4.JPG', 'assets/images/posts/2_5.JPG'],
      datePosted: '02/01/2017',
      likeNumber: '164',
      commentNumber: '28',
      comments: ['1', '2', '3', '4', '5', '6', '7']
    }, {
      id: '3', name: 'Khu du lịch Văn hóa Suối Tiên', address: '120 Xa lộ Hà Nội, Phường Tân Phú, Quận 9, Hồ Chí Minh 700000',
      costNeed: '200.000 VND', describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
      pictures: ['assets/images/posts/1_0.JPG', 'assets/images/posts/1_1.JPG', 'assets/images/posts/1_2.JPG', 'assets/images/posts/1_3.JPG'],
      datePosted: '02/01/2017',
      likeNumber: '124',
      commentNumber: '20',
      comments: ['1', '2', '3', '4', '5', '6', '7']
    }, {
      id: '4', name: 'Khu du lịch Văn hóa Suối Tiên', address: '120 Xa lộ Hà Nội, Phường Tân Phú, Quận 9, Hồ Chí Minh 700000',
      costNeed: '200.000 VND', describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
      pictures: ['assets/images/posts/1_0.JPG', 'assets/images/posts/1_1.JPG', 'assets/images/posts/1_2.JPG', 'assets/images/posts/1_3.JPG'],
      datePosted: '02/01/2017',
      likeNumber: '124',
      commentNumber: '20',
      comments: ['1', '2', '3', '4', '5', '6', '7']
    }, {
      id: '5', name: 'Khu du lịch Văn hóa Suối Tiên', address: '120 Xa lộ Hà Nội, Phường Tân Phú, Quận 9, Hồ Chí Minh 700000',
      costNeed: '200.000 VND', describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
      pictures: ['assets/images/posts/1_0.JPG', 'assets/images/posts/1_1.JPG', 'assets/images/posts/1_2.JPG', 'assets/images/posts/1_3.JPG'],
      datePosted: '02/01/2017',
      likeNumber: '124',
      commentNumber: '20',
      comments: ['1', '2', '3', '4', '5', '6', '7']
    },
  ];

  constructor() {
  }

  // TODO: observables
  getData() {
    return this.data;
  }
}
