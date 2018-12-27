import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        name: 'Lê Khải',
        picture: 'assets/images/users/leekhai.png',
        email: 'leekhai18@gmail.com',
        phone: '0328372204'
      },
      {
        id: 2,
        name: 'Lê Kim',
        picture: 'assets/images/users/leekim.png',
        email: 'leekim@gmail.com',
        phone: '0328372204'
      },
      {
        id: 3,
        name: 'Đăng Khôi',
        picture: 'assets/images/users/dangkhoi.png',
        email: 'anhthunguyen@gmail.com',
        phone: '0328372204'
      },
      {
        id: 4,
        name: 'Nguyễn Tuấn Anh',
        picture: 'assets/images/users/tuananh.png',
        email: 'nguyentuananh@gmail.com',
        phone: '0328372204'
      },
      {
        id: 5,
        name: 'Phạm Băng',
        picture: 'assets/images/users/phambang.png',
        email: 'bangpham@gmail.com',
        phone: '0328372204'
      },
      {
        id: 6,
        name: 'Khả Như',
        picture: 'assets/images/users/khanhu.png',
        email: 'bangpham@gmail.com',
        phone: '0328372204'
      },
      {
        id: 7,
        name: 'Phát Nguyễn',
        picture: 'assets/images/users/phatnguyen.jpg',
        email: 'phatnguyen@gmail.com',
        phone: '0328372204'
      },
      {
        id: 8,
        name: 'Kiều Anh',
        picture: 'assets/images/users/kieuanh.jpg',
        email: 'kieuanh@gmail.com',
        phone: '0328372204'
      },
      {
        id: 9,
        name: 'Quốc Đại',
        picture: 'assets/images/users/quocdai.jpg',
        email: 'quocdai@gmail.com',
        phone: '0328372204'
      },
      {
        id: 10,
        name: 'Cường Đô La',
        picture: 'assets/images/users/cuongdola.jpg',
        email: 'cuongdola@gmail.com',
        phone: '0328372204'
      },
      {
        id: 11,
        name: 'Lê Minh',
        picture: 'assets/images/users/leminh.png',
        email: 'leminh@gmail.com',
        phone: '0328372204'
      },
      {
        id: 12,
        name: 'Nguyên Lam',
        picture: 'assets/images/users/nguyenlam.jpg',
        email: 'nguyenlam@gmail.com',
        phone: '0328372204'
      },
      {
        id: 13,
        name: 'Đạt Nguyễn',
        picture: 'assets/images/users/datnguyen.jpg',
        email: 'datnguyen@gmail.com',
        phone: '0328372204'
      },
      {
        id: 14,
        name: 'Phương Tuyền',
        picture: 'assets/images/users/phuongtuyen.jpg',
        email: 'phuongtuyen@gmail.com',
        phone: '0328372204'
      },
      {
        id: 15,
        name: 'Phương Vy',
        picture: 'assets/images/users/phuongvy.jpg',
        email: 'phuongvy@gmail.com',
        phone: '0328372204'
      },
      {
        id: 16,
        name: 'Kim Cúc',
        picture: 'assets/images/users/kimcuc.jpg',
        email: 'kimcuc@gmail.com',
        phone: '0328372204'
      },
      {
        id: 17,
        name: 'Duy Anh',
        picture: 'assets/images/users/duyanh.jpg',
        email: 'duyanh@gmail.com',
        phone: '0328372204'
      },
      {
        id: 18,
        name: 'Công Phượng',
        picture: 'assets/images/users/congphuong.jpg',
        email: 'congphuong@gmail.com',
        phone: '0328372204'
      },
      {
        id: 19,
        name: 'Hoà Min',
        picture: 'assets/images/users/hoamy.jpg',
        email: 'hoamy@gmail.com',
        phone: '0328372204'
      }
    ]

    const posts = [
      {
        id: 1,
        name: 'Hang Sơn Đoòng',
        address: 'Xã Tân Trạch, huyện Bố Trạch, tỉnh Quảng Bình, Việt Nam',
        costNeed: '100.000 VND',
        describe: 'Hang Sơn Đoòng là hang động tự nhiên lớn nhất thế giới. Hang này nằm trong quần thể hang động Phong Nha-Kẻ Bàng. Hang Sơn Đoòng là một phần của hệ thống ngầm nối với hơn 150 động khác ở Việt Nam gần biên giới với Lào.[1][2] Thời báo New York xếp hang Sơn Đoòng vào vị trí thứ 8 trong 52 địa danh trong danh sách những nơi nên đến năm 2014.[3]',
        pictures: [
          'assets/images/posts/1_1.jpg',
          'assets/images/posts/1_2.jpg',
          'assets/images/posts/1_3.jpg',
          'assets/images/posts/1_4.jpg',
          'assets/images/posts/1_4.jpg'
        ],
        datePosted: '02/01/2017',
        likeNumber: '12',
        commentNumber: '7',
        status: '0',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 2,
        name: 'Sapa',
        address: 'Huyện Sa Pa, tỉnh Lào Cai, Việt Nam',
        costNeed: '100.000 VND',
        describe: 'Đây là vùng được biết đến là có cảnh quan đẹp, thu hút du lịch.',
        pictures: [
          'assets/images/posts/2_1.jpg',
          'assets/images/posts/2_2.jpg',
          'assets/images/posts/2_3.jpg',
          'assets/images/posts/2_4.jpg',
          'assets/images/posts/2_4.jpg'
        ],
        datePosted: '02/01/2018',
        likeNumber: '15',
        commentNumber: '5',
        status: '1',
        reviewNumber: '13',
        rate: '5',
        userId: 1
      },
      {
        id: 3,
        name: 'Cần Thơ',
        address: 'Cần Thơ',
        costNeed: '0 VND',
        describe: 'Cần Thơ là thành phố lớn của Việt Nam, là thành phố hiện đại và phát triển nhất ở Đồng bằng sông Cửu Long. Là thành phố lớn thứ 4 cả nước theo quy mô dân số,lớn thứ 5 cả nước theo vai trò và vị thế cũng như quy mô kinh tế.Cần Thơ đồng thời là một đô thị loại 1, thành phố trực thuộc Trung ương,Cần Thơ mệnh danh là Tây Đô,là thủ phủ kinh tế, văn hóa,xã hội,y tế và giáo dục của ĐBSCL.Thành phố thơ mộng nằm bên hữu ngạn của sông Hậu, thuộc vùng đồng bằng sông Cửu Long',
        pictures: [
          'assets/images/posts/3_1.jpg',
          'assets/images/posts/3_2.jpg',
          'assets/images/posts/3_3.jpg',
          'assets/images/posts/3_4.jpg',
          'assets/images/posts/3_4.jpg'
        ],
        datePosted: '02/09/2018',
        likeNumber: '17',
        commentNumber: '5',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 4,
        name: 'Phú Quốc',
        address: 'Huyện đảo Phú Quốc trực thuộc tỉnh Kiên Giang',
        costNeed: '1.000.000 VND',
        describe: 'Phú Quốc, còn được mệnh danh là Đảo Ngọc, là hòn đảo lớn nhất của Việt Nam, cũng là đảo lớn nhất trong quần thể 22 đảo tại đây, nằm trong vịnh Thái Lan. Đảo Phú Quốc cùng với các đảo khác tạo thành huyện đảo Phú Quốc trực thuộc tỉnh Kiên Giang. Toàn bộ huyện đảo có tổng diện tích 589,23 km² (theo thống kê số liệu đất năm 2005), xấp xỉ diện tích đảo quốc Singapore thập niên 1960 khi chưa san lấp lấn biển.[1] Thị trấn Dương Đông, tọa lạc ở phía tây, là thủ phủ của huyện đảo. Phú Quốc nằm cách thành phố Rạch Giá 120 km và cách thành phố Hà Tiên 45 km. Năm 2006, Khu dự trữ sinh quyển ven biển và biển đảo Kiên Giang bao gồm cả huyện này được UNESCO công nhận là khu dự trữ sinh quyển thế giới.',
        pictures: [
          'assets/images/posts/4_1.jpg',
          'assets/images/posts/4_2.jpg',
          'assets/images/posts/4_3.jpg',
          'assets/images/posts/4_4.jpg',
          'assets/images/posts/4_4.jpg'
        ],
        datePosted: '02/05/2018',
        likeNumber: '10',
        commentNumber: '20',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 5,
        name: 'Đảo Sơn Trà',
        address: 'Quận Sơn Trà, thành phố Đà Nẵng, Việt Nam.',
        costNeed: '200.000 VND',
        describe: 'Sơn Trà là tên một bán đảo và ngọn núi thuộc quận Sơn Trà (tên quận đặt theo tên bán đảo), thành phố Đà Nẵng, Việt Nam.',
        pictures: [
          'assets/images/posts/5_1.jpg',
          'assets/images/posts/5_2.jpg',
          'assets/images/posts/5_3.jpg',
          'assets/images/posts/5_4.jpg',
          'assets/images/posts/5_4.jpg'
        ],
        datePosted: '02/09/2018',
        likeNumber: '14',
        commentNumber: '3',
        status: '2',
        reviewNumber: '13',
        rate: '5',
        userId: 1
      },
      {
        id: 6,
        name: 'Phố cổ Hội An',
        address: ' Tỉnh Quảng Nam, Việt Nam',
        costNeed: '80.000 VND',
        describe: 'Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam. Nhờ những yếu tố địa lý và khí hậu thuận lợi, Hội An từng là một thương cảng quốc tế sầm uất, nơi gặp gỡ của những thuyền buôn Nhật Bản, Trung Quốc và phương Tây trong suốt thế kỷ XVII và XVIII. Trước thời kỳ này, nơi đây cũng từng có những dấu tích của thương cảng Chăm Pa hay được nhắc đến cùng con đường tơ lụa trên biển. Thế kỷ 19, do giao thông đường thủy ở đây không còn thuận tiện, cảng thị Hội An dần suy thoái, nhường chỗ cho Đà Nẵng khi đó đang được người Pháp xây dựng. Hội An may mắn không bị tàn phá trong hai cuộc chiến tranh và tránh được quá trình đô thị hóa ồ ạt cuối thế kỷ 20. Bắt đầu từ thập niên 1980, những giá trị kiến trúc và văn hóa của phố cổ Hội An dần được giới học giả và cả du khách chú ý, khiến nơi đây trở thành một trong những điểm du lịch hấp dẫn của Việt Nam.',
        pictures: [
          'assets/images/posts/6_1.jpg',
          'assets/images/posts/6_2.jpg',
          'assets/images/posts/6_3.jpg',
          'assets/images/posts/6_4.jpg',
          'assets/images/posts/6_4.jpg'
        ],
        datePosted: '25/11/2018',
        likeNumber: '5',
        commentNumber: '2',
        status: '1',
        reviewNumber: '5',
        rate: '5',
        userId: 2
      },
      {
        id: 7,
        name: 'Vịnh Hạ Long',
        address: ' Huyện đảo Vân Đồn,thành phố Hạ Long, tỉnh Quảng Ninh.',
        costNeed: '300.000 VND',
        describe: 'Là trung tâm của một khu vực rộng lớn có những yếu tố ít nhiều tương đồng về địa chất, địa mạo, cảnh quan, khí hậu và văn hóa, với vịnh Bái Tử Long phía Đông Bắc và quần đảo Cát Bà phía Tây Nam, vịnh Hạ Long giới hạn trong diện tích khoảng 1.553 km² bao gồm 1.969 hòn đảo lớn nhỏ, phần lớn là đảo đá vôi, trong đó vùng lõi của Vịnh có diện tích 335 km² quần tụ dày đặc 775 hòn đảo. Lịch sử kiến tạo địa chất đá vôi của Vịnh đã trải qua khoảng 500 triệu năm với những hoàn cảnh cổ địa lý rất khác nhau; và quá trình tiến hóa carxtơ đầy đủ trải qua trên 20 triệu năm với sự kết hợp các yếu tố như tầng đá vôi dày, khí hậu nóng ẩm và tiến trình nâng kiến tạo chậm chạp trên tổng thể.[1] Sự kết hợp của môi trường, khí hậu, địa chất, địa mạo, đã khiến vịnh Hạ Long trở thành quần tụ của đa dạng sinh học bao gồm hệ sinh thái rừng kín thường xanh mưa ẩm nhiệt đới và hệ sinh thái biển và ven bờ với nhiều tiểu hệ sinh thái.[2] 17 loài thực vật đặc hữu[3] và khoảng 60 loài động vật đặc hữu[4] đã được phát hiện trong số hàng ngàn động, thực vật quần cư tại Vịnh.',
        pictures: [
          'assets/images/posts/7_1.jpg',
          'assets/images/posts/7_2.jpg',
          'assets/images/posts/7_3.jpg',
          'assets/images/posts/7_4.jpg',
          'assets/images/posts/7_4.jpg'
        ],
        datePosted: '22/01/2018',
        likeNumber: '11',
        commentNumber: '11',
        status: '1',
        reviewNumber: '11',
        rate: '5',
        userId: 2
      },
      {
        id: 8,
        name: 'Côn Đảo',
        address: 'Tỉnh Bà Rịa-Vũng Tàu',
        costNeed: '500.000 VND',
        describe: 'Côn Đảo hay Côn Sơn cũng hay dùng cho tên của hòn đảo lớn nhất trong quần đảo này. Lịch sử Việt Nam trước thế kỷ XX thường gọi đảo Côn Sơn là đảo Côn Lôn. Tên gọi cũ trong các văn bản tiếng Anh và tiếng Pháp là Poulo Condor. Năm 1977, Quốc hội Việt Nam quyết định tên gọi chính thức là Côn Đảo.',
        pictures: [
          'assets/images/posts/8_1.jpg',
          'assets/images/posts/8_2.jpg',
          'assets/images/posts/8_3.jpg',
          'assets/images/posts/8_4.jpg',
          'assets/images/posts/8_4.jpg'
        ],
        datePosted: '02/04/2018',
        likeNumber: '6',
        commentNumber: '6',
        status: '1',
        reviewNumber: '13',
        rate: '4',
        userId: 2
      },
      {
        id: 9,
        name: 'Đà Lạt',
        address: 'Tỉnh Lâm Đồng, Việt Nam.',
        costNeed: '280.000 VND',
        describe: 'Thành phố Đà Lạt là tỉnh lỵ của tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên, thuộc vùng Tây Nguyên, Việt Nam. Từ xa xưa, vùng đất này vốn là địa bàn cư trú của những cư dân người Lạch, người Chil và người Srê thuộc dân tộc Cơ Ho. Cuối thế kỷ 19, khi tìm kiếm một địa điểm để xây dựng trạm nghỉ dưỡng dành cho người Pháp ở Đông Dương, Toàn quyền Paul Doumer đã quyết định chọn cao nguyên Lâm Viên theo đề nghị của bác sĩ Alexandre Yersin, người từng thám hiểm tới nơi đây vào năm 1893. Trong nửa đầu thế kỷ 20, từ một địa điểm hoang vu, những người Pháp đã quy hoạch và xây dựng lên một thành phố xinh đẹp với những biệt thự, công sở, khách sạn và trường học, một trung tâm du lịch và giáo dục của Đông Dương khi đó. Trải qua những khoảng thời gian thăng trầm của hai cuộc chiến tranh cùng giai đoạn khó khăn những thập niên 1970–1980, Đà Lạt ngày nay là một thành phố 250.000 dân, đô thị loại I trực thuộc tỉnh, giữ vai trò trung tâm chính trị, kinh tế và văn hóa của tỉnh Lâm Đồng.',
        pictures: [
          'assets/images/posts/9_1.jpg',
          'assets/images/posts/9_2.jpg',
          'assets/images/posts/9_3.jpg',
          'assets/images/posts/9_4.jpg',
          'assets/images/posts/9_4.jpg'
        ],
        datePosted: '11/10/2018',
        likeNumber: '4',
        commentNumber: '5',
        status: '1',
        reviewNumber: '6',
        rate: '4',
        userId: 2
      },
      {
        id: 10,
        name: 'Jungle Beach (Khánh Hòa)',
        address: 'Xã Ninh Phước, huyện Ninh Hòa, tỉnh Khánh Hòa.',
        costNeed: '1.800.000 VND',
        describe: 'Không phải resort, cũng không hẳn là homestay mà nói Jungle Beach là khách sạn thì càng không đúng. Có lẽ, chính bởi vẻ đẹp bình dị, cuốn hút bởi những bãi biển hoang sơ mà người ta nhắc đến thiên đường bí mật này là ngôi làng biển  của riêng phố biển Nha Trang.',
        pictures: [
          'assets/images/posts/10_1.jpg',
          'assets/images/posts/10_2.jpg',
          'assets/images/posts/10_3.jpg',
          'assets/images/posts/10_4.jpg',
          'assets/images/posts/10_4.jpg'
        ],
        datePosted: '02/01/2018',
        likeNumber: '8',
        commentNumber: '8',
        status: '0',
        reviewNumber: '8',
        rate: '3',
        userId: 2
      },
      {
        id: 11,
        name: 'Tràng An',
        address: 'Tỉnh Ninh Bình',
        costNeed: '150.000 VND',
        describe: 'Tràng An là một khu du lịch sinh thái nằm trong Quần thể di sản thế giới Tràng An thuộc tỉnh Ninh Bình. Nơi đây đã được Chính phủ Việt Nam xếp hạng di tích quốc gia đặc biệt quan trọng và UNESCO công nhận là di sản thế giới kép từ năm 2013. Tràng An với hệ thống dãy núi đá vôi có tuổi địa chất khoảng 250 triệu năm, qua thời gian dài phong hóa bởi sự biến đổi của trái đất, khí hậu, biển tiến, biển thoái đã mang trong mình hàng trăm thung lũng, hang động, hồ đầm. Danh thắng này là nơi bảo tồn và chứa đựng nhiều hệ sinh thái rừng ngập nước, rừng trên núi đá vôi, các di chỉ khảo cổ học và di tích lịch sử văn hóa.[1] Hệ thống núi đá, sông suối, rừng và hang động ở Tràng An rất hiểm trở nên được Vua Đinh Tiên Hoàng chọn làm thành Nam bảo vệ kinh đô Hoa Lư ở thế kỷ X và sau đó Nhà Trần sử dụng làm hành cung Vũ Lâm trong kháng chiến Nguyên Mông. Hiện nay nơi đây còn nhiều di tích lịch sử thời Đinh và thời Trần.',
        pictures: [
          'assets/images/posts/11_1.jpg',
          'assets/images/posts/11_2.jpg',
          'assets/images/posts/11_3.jpg',
          'assets/images/posts/11_4.jpg',
          'assets/images/posts/11_4.jpg'
        ],
        datePosted: '16/01/2018',
        likeNumber: '7',
        commentNumber: '7',
        status: '0',
        reviewNumber: '7',
        rate: '5',
        userId: 3
      },
      {
        id: 12,
        name: 'Chùa Linh Phước',
        address: ' Số 120 Tự Phước, thuộc địa bàn Trại Mát, cách trung tâm thành phố Đà Lạt 8 km, trên quốc lộ 20.',
        costNeed: '0 VND',
        describe: 'Chùa Linh Phước (chữ Hán: 靈福寺) tọa lạc tại số 120 Tự Phước, thuộc địa bàn Trại Mát, cách trung tâm thành phố Đà Lạt 8 km, trên quốc lộ 20. Chùa còn được gọi là Chùa Ve Chai vì trong sân chùa có con rồng dài 49 m được làm bằng 12.000 vỏ chai lọ. Chùa Linh Phước là một công trình kiến trúc khảm sành đặc sắc của thành phố Đà Lạt.',
        pictures: [
          'assets/images/posts/12_1.jpg',
          'assets/images/posts/12_2.jpg',
          'assets/images/posts/12_3.jpg',
          'assets/images/posts/12_4.jpg',
          'assets/images/posts/12_4.jpg'
        ],
        datePosted: '11/01/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '0',
        reviewNumber: '11',
        rate: '4',
        userId: 3
      },
      {
        id: 13,
        name: 'Quần thể di tích Cố đô Huế',
        address: 'Thành phố Huế',
        costNeed: '0 VND',
        describe: 'Quần thể di tích Cố đô Huế hay Quần thể di tích Huế là những di tích lịch sử - văn hoá do triều Nguyễn chủ trương xây dựng trong khoảng thời gian từ đầu thế kỷ 19 đến nửa đầu thế kỷ 20 trên địa bàn kinh đô Huế xưa; nay thuộc phạm vi thành phố Huế và một vài vùng phụ cận thuộc tỉnh Thừa Thiên-Huế, Việt Nam. Phần lớn các di tích này nay thuộc sự quản lý của Trung tâm Bảo tồn Di tích Cố đô Huế và được UNESCO công nhận là Di sản Văn hoá Thế giới vào ngày 11 tháng 12 năm 1993. Hiện tại, cố đô Huế đã được thủ tướng chính phủ Việt Nam đưa vào danh sách xếp hạng 62 di tích quốc gia đặc biệt quan trọng. Quần thể di tích Cố đô Huế có thể phân chia thành các cụm công trình gồm các cụm công trình ngoài Kinh thành Huế và trong kinh thành Huế.',
        pictures: [
          'assets/images/posts/13_1.jpg',
          'assets/images/posts/13_2.jpg',
          'assets/images/posts/13_3.jpg',
          'assets/images/posts/13_4.jpg',
          'assets/images/posts/13_4.jpg'
        ],
        datePosted: '19/07/2018',
        likeNumber: '13',
        commentNumber: '13',
        status: '0',
        reviewNumber: '13',
        rate: '5',
        userId: 3
      },
      {
        id: 14,
        name: 'Quần đảo Cát Bà',
        address: 'Huyện đảo Cát Bà, tỉnh Quảng Ninh',
        costNeed: '250.000 VND',
        describe: 'Quần đảo Cát Bà là quần thể gồm 367 đảo trong đó có đảo Cát Bà ở phía nam vịnh Hạ Long, ngoài khơi thành phố Hải Phòng và tỉnh Quảng Ninh, cách trung tâm thành phố Hải Phòng khoảng 30 km, cách thành phố Hạ Long khoảng 25 km. Về mặt hành chính, quần đảo thuộc huyện đảo Cát Hải, thành phố Hải Phòng. Nơi đây đã được UNESCO công nhận là khu dự trữ sinh quyển thế giới. Cơ sở hạ tầng cũng khá phát triển với tổ hợp nhiều khách sạn, nhà nghỉ, khu nghỉ dưỡng, chùa chiền và đặc biệt là toàn bộ khu vực đảo đã được thành phố Hải Phòng triển khai các trạm thu phát wifi.',
        pictures: [
          'assets/images/posts/14_1.jpg',
          'assets/images/posts/14_2.jpg',
          'assets/images/posts/14_3.jpg',
          'assets/images/posts/14_4.jpg',
          'assets/images/posts/14_4.jpg'
        ],
        datePosted: '15/03/2018',
        likeNumber: '10',
        commentNumber: '5',
        status: '1',
        reviewNumber: '5',
        rate: '4',
        userId: 3
      },
      {
        id: 15,
        name: 'Vườn quốc gia Phong Nha - Kẻ Bàng',
        address: 'Huyện Bố Trạch, và Minh Hóa, tỉnh Quảng Bình',
        costNeed: '300.000 VND',
        describe: 'Phong Nha-Kẻ Bàng nằm ở một khu vực núi đá vôi rộng khoảng 200.000 ha thuộc lãnh thổ Việt Nam, khu vực lãnh thổ Lào tiếp giáp vườn quốc gia này cũng có diện tích núi đá vôi khoảng 200.000 ha. Diện tích vùng lõi của vườn quốc gia là 85.754 ha và một vùng đệm rộng 195.400 ha[4]. Tháng 8 năm 2013, Thủ tướng chính phủ đã có quyết định mở rộng vườn quốc gia này lên 1233,26 km2[1]. Vườn quốc gia này được thiết lập để bảo vệ một trong hai vùng carxtơ lớn nhất thế giới với khoảng 300 hang động và bảo tồn hệ sinh thái bắc Trường Sơn ở khu vực Bắc Trung Bộ Việt Nam[5][6]. Đặc trưng của vườn quốc gia này là các kiến tạo đá vôi, 300 hang động, các sông ngầm và hệ động thực vật quý hiếm nằm trong Sách đỏ Việt Nam và Sách đỏ thế giới. Các hang động ở đây có tổng chiều dài khoảng hơn 80 km nhưng các nhà thám hiểm hang động Anh và Việt Nam mới chỉ thám hiểm 20 km, trong đó 17 km ở khu vực Phong Nha và 3 km ở khu vực Kẻ Bàng.',
        pictures: [
          'assets/images/posts/15_1.jpg',
          'assets/images/posts/15_2.jpg',
          'assets/images/posts/15_3.jpg',
          'assets/images/posts/15_4.jpg',
          'assets/images/posts/15_4.jpg'
        ],
        datePosted: '07/08/2018',
        likeNumber: '12',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 3
      },
      {
        id: 16,
        name: 'Vườn quốc gia Cúc Phương',
        address: 'Địa phận ranh giới 3 khu vực Tây Bắc, châu thổ sông Hồng và Bắc Trung Bộ thuộc ba tỉnh: Ninh Bình, Hòa Bình, Thanh Hóa',
        costNeed: '100.000 VND',
        describe: 'Vườn Quốc gia Cúc Phương (hay rừng Cúc Phương) là một khu bảo tồn thiên nhiên, khu rừng đặc dụng nằm trên địa phận ranh giới 3 khu vực Tây Bắc, châu thổ sông Hồng và Bắc Trung Bộ thuộc ba tỉnh: Ninh Bình, Hòa Bình, Thanh Hóa. Vườn quốc gia này có hệ động thực vật phong phú đa dạng mang đặc trưng rừng mưa nhiệt đới. Nhiều loài động thực vật có nguy cơ tuyệt chủng cao được phát hiện và bảo tồn tại đây. Đây cũng là vườn quốc gia đầu tiên tại Việt Nam.',
        pictures: [
          'assets/images/posts/16_1.jpg',
          'assets/images/posts/16_2.jpg',
          'assets/images/posts/16_3.jpg',
          'assets/images/posts/16_4.jpg',
          'assets/images/posts/16_4.jpg'
        ],
        datePosted: '11/012/2016',
        likeNumber: '19',
        commentNumber: '17',
        status: '2',
        reviewNumber: '17',
        rate: '4',
        userId: 1
      },
      {
        id: 17,
        name: 'Vũng Tàu',
        address: 'Thành phố Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu',
        costNeed: '0 VND',
        describe: 'Vũng Tàu là thành phố thuộc tỉnh Bà Rịa - Vũng Tàu, ở vùng Đông Nam Bộ Việt Nam. Đây là trung tâm kinh tế, tài chính, văn hóa, du lịch, giao thông - vận tải và giáo dục và là một trong những trung tâm kinh tế của vùng Đông Nam Bộ. Sở hữu nhiều bãi biển đẹp và cơ sở hạ tầng được đầu tư hoàn chỉnh, Vũng Tàu là một địa điểm du lịch nổi tiếng tại miền Nam. Ngoài ra, thành phố còn là khu vực hậu cần của ngành công nghiệp dầu khí Việt Nam. Từ ngày 2 tháng 5 năm 2012, tỉnh lỵ Bà Rịa-Vũng Tàu chuyển đến thành phố Bà Rịa.[2] Thành phố Vũng Tàu được công nhận là đô thị loại I trực thuộc tỉnh đầu tiên của cả Nam Bộ.',
        pictures: [
          'assets/images/posts/17_1.jpg',
          'assets/images/posts/17_2.jpg',
          'assets/images/posts/17_3.jpg',
          'assets/images/posts/17_4.jpg',
          'assets/images/posts/17_4.jpg'
        ],
        datePosted: '14/06/2018',
        likeNumber: '4',
        commentNumber: '4',
        status: '1',
        reviewNumber: '4',
        rate: '4',
        userId: 1
      },
      {
        id: 18,
        name: 'Nha Trang',
        address: 'Thành phố Nha Trang, tỉnh Khánh Hòa, Việt Nam',
        costNeed: '90.000 VND',
        describe: 'Nha Trang là một thành phố ven biển và là trung tâm chính trị, kinh tế, văn hóa, khoa học kỹ thuật và du lịch của tỉnh Khánh Hòa, Việt Nam. Trước khi trở thành phần đất của Việt Nam, Nha Trang thuộc về Chiêm Thành. Các di tích của người Chăm vẫn còn tại nhiều nơi ở Nha Trang. Nha Trang được Thủ tướng chính phủ Việt Nam công nhận là đô thị loại 1 vào ngày 22 tháng 4 năm 2009. Đây là một trong các đô thị loại 1 trực thuộc tỉnh của Việt Nam. Nha Trang được mệnh danh là hòn ngọc của biển Đông, Viên ngọc xanh [2] vì giá trị thiên nhiên, vẻ đẹp cũng như khí hậu của nó.[3]',
        pictures: [
          'assets/images/posts/18_1.jpg',
          'assets/images/posts/18_2.jpg',
          'assets/images/posts/18_3.jpg',
          'assets/images/posts/18_4.jpg',
          'assets/images/posts/18_4.jpg'
        ],
        datePosted: '29/04/2018',
        likeNumber: '3',
        commentNumber: '1',
        status: '0',
        reviewNumber: '4',
        rate: '3',
        userId: 1
      },
      {
        id: 19,
        name: 'Đà Nẵng',
        address: 'Thành phố Đà Nẵng',
        costNeed: '0 VND',
        describe: 'Đà Nẵng là một thành phố thuộc trung ương, nằm trong vùng Nam Trung Bộ, Việt Nam, là trung tâm kinh tế, tài chính, chính trị, văn hoá, du lịch, xã hội, giáo dục, đào tạo, khoa học và công nghệ, y tế chuyên sâu của khu vực miền Trung - Tây Nguyên và cả nước. Đà Nẵng là thành phố quan trọng nhất miền Trung, đồng thời cũng là một trong 5 thành phố trực thuộc Trung ương ở Việt Nam,[2] đô thị loại 1 trung tâm cấp quốc gia, cùng với Hải Phòng và Cần Thơ.',
        pictures: [
          'assets/images/posts/19_1.jpg',
          'assets/images/posts/19_2.jpg',
          'assets/images/posts/19_3.jpg',
          'assets/images/posts/19_4.jpg',
          'assets/images/posts/19_4.jpg'
        ],
        datePosted: '22/01/2018',
        likeNumber: '18',
        commentNumber: '18',
        status: '0',
        reviewNumber: '18',
        rate: '5',
        userId: 1
      },
      {
        id: 20,
        name: 'Phan Thiết',
        address: 'Thành phố Phan Thiết, tỉnh Bình Thuận',
        costNeed: '100.000 VND',
        describe: 'Phan Thiết là tỉnh lỵ, trung tâm chính trị, kinh tế, văn hóa và khoa học kỹ thuật của tỉnh Bình Thuận. Phan Thiết nằm trên quốc lộ 1A (chiều dài quốc lộ 1A đi qua là 7 km), trung tâm hành chính Thành phố Phan Thiết cách trung tâm hành chính Thành phố Hồ Chí Minh 183 km về hướng đông bắc. Phan Thiết là đô thị Duyên Hải Cực Nam Trung Bộ, thuộc khu vực Nam Trung Bộ.Diện tích tự nhiên là 206,45 km², bờ biển trải dài 57,40 km.',
        pictures: [
          'assets/images/posts/20_1.jpg',
          'assets/images/posts/20_2.jpg',
          'assets/images/posts/20_3.jpg',
          'assets/images/posts/20_4.jpg',
          'assets/images/posts/20_4.jpg'
        ],
        datePosted: '12/08/2018',
        likeNumber: '11',
        commentNumber: '12',
        status: '1',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 21,
        name: 'Địa đạo Củ Chi',
        address: 'Huyện Củ Chi, Thành phố Hồ Chí Minh',
        costNeed: '100.000 VND',
        describe: 'Địa đạo Củ Chi là một hệ thống phòng thủ trong lòng đất ở huyện Củ Chi, cách Thành phố Hồ Chí Minh 70 km về hướng tây-bắc. Hệ thống này được Việt Minh và Mặt trận Dân tộc Giải phóng miền Nam Việt Nam đào trong thời kỳ Chiến tranh Đông Dương và Chiến tranh Việt Nam. Hệ thống địa đạo bao gồm bệnh xá, nhiều phòng ở, nhà bếp, kho chứa, phòng làm việc, hệ thống đường ngầm dưới lòng đất. Hệ thống địa đạo dài khoảng 250 km và có các hệ thống thông hơi tại vị trí các bụi cây. Địa đạo Củ Chi được xây dựng trên vùng đất được mệnh danh là đất thép, nằm ở điểm cuối Đường mòn Hồ Chí Minh. Trong Chiến dịch Tết Mậu Thân 1968, Mặt trận Dân tộc Giải phóng miền Nam Việt Nam đã sử dụng hệ thống địa đạo này để tấn công vào Sài Gòn.',
        pictures: [
          'assets/images/posts/21_1.jpg',
          'assets/images/posts/21_2.jpg',
          'assets/images/posts/21_3.jpg',
          'assets/images/posts/21_4.jpg',
          'assets/images/posts/21_4.jpg'
        ],
        datePosted: '02/01/2018',
        likeNumber: '16',
        commentNumber: '16',
        status: '1',
        reviewNumber: '16',
        rate: '5',
        userId: 1
      },
      {
        id: 22,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 23,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 24,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 25,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 26,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 27,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 28,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 29,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 30,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 31,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 32,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      },
      {
        id: 33,
        name: 'Khu du lịch Văn hóa Suối Tiên',
        address: 'Quận 9, Thành phố Hồ Chí Minh',
        costNeed: '240.000 VND',
        describe: 'Khu Du lịch Văn hóa Suối Tiên là một khu liên hợp vui chơi giải trí tại Quận 9, Thành phố Hồ Chí Minh. Kiểu cách kiến trúc và các thể loại vui chơi được gắn lồng vào các hình ảnh lịch sử và truyền thuyết Việt Nam như Lạc Long Quân - Âu Cơ, Vua Hùng, sự tích trăm trứng, Sơn Tinh Thủy Tinh, sự tích bánh chưng bánh dày, sự tích quả dưa hấu, chín tầng địa ngục, tứ linh hội tụ Long - Lân - Quy - Phụng, công viên giải trí dưới nước, đặc biệt là biển Tiên Đồng, biển nhân tạo đầu tiên ở Việt Nam (hiện nay có biển nhân tạo tại khu du lịch Đại Nam Văn Hiến). Đây là địa điểm thu hút khá lớn lượng khách vui chơi giải trí của Thành phố Hồ Chí Minh và các du khách địa phương khác đến.',
        pictures: [
          'assets/images/posts/22_1.jpg',
          'assets/images/posts/22_2.jpg',
          'assets/images/posts/22_3.jpg',
          'assets/images/posts/22_4.jpg',
          'assets/images/posts/22_4.jpg'
        ],
        datePosted: '22/10/2018',
        likeNumber: '10',
        commentNumber: '11',
        status: '2',
        reviewNumber: '13',
        rate: '4',
        userId: 1
      }
    ]

    const comments = [
      {
        id: 0,
        postId: 19,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 0'
      },
      {
        id: 1,
        postId: 16,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 1'
      },
      {
        id: 2,
        postId: 29,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 2'
      },
      {
        id: 3,
        postId: 12,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 3'
      },
      {
        id: 4,
        postId: 21,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 4'
      },
      {
        id: 5,
        postId: 15,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 5'
      },
      {
        id: 6,
        postId: 16,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 6'
      },
      {
        id: 7,
        postId: 22,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 7'
      },
      {
        id: 8,
        postId: 29,
        userId: 1,
        content: 'Tôi nghĩ đây là bình luận thứ 8'
      },
      {
        id: 9,
        postId: 15,
        userId: 1,
        content: 'Tôi nghĩ đây là bình luận thứ 9'
      },
      {
        id: 10,
        postId: 7,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 10'
      },
      {
        id: 11,
        postId: 1,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 11'
      },
      {
        id: 12,
        postId: 21,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 12'
      },
      {
        id: 13,
        postId: 8,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 13'
      },
      {
        id: 14,
        postId: 18,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 14'
      },
      {
        id: 15,
        postId: 27,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 15'
      },
      {
        id: 16,
        postId: 4,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 16'
      },
      {
        id: 17,
        postId: 7,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 17'
      },
      {
        id: 18,
        postId: 9,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 18'
      },
      {
        id: 19,
        postId: 17,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 19'
      },
      {
        id: 20,
        postId: 26,
        userId: 3,
        content: 'Tôi nghĩ đây là bình luận thứ 20'
      },
      {
        id: 21,
        postId: 1,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 21'
      },
      {
        id: 22,
        postId: 3,
        userId: 3,
        content: 'Tôi nghĩ đây là bình luận thứ 22'
      },
      {
        id: 23,
        postId: 7,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 23'
      },
      {
        id: 24,
        postId: 7,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 24'
      },
      {
        id: 25,
        postId: 4,
        userId: 10,
        content: 'Tôi nghĩ đây là bình luận thứ 25'
      },
      {
        id: 26,
        postId: 12,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 26'
      },
      {
        id: 27,
        postId: 28,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 27'
      },
      {
        id: 28,
        postId: 4,
        userId: 6,
        content: 'Tôi nghĩ đây là bình luận thứ 28'
      },
      {
        id: 29,
        postId: 23,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 29'
      },
      {
        id: 30,
        postId: 12,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 30'
      },
      {
        id: 31,
        postId: 26,
        userId: 6,
        content: 'Tôi nghĩ đây là bình luận thứ 31'
      },
      {
        id: 32,
        postId: 18,
        userId: 18,
        content: 'Tôi nghĩ đây là bình luận thứ 32'
      },
      {
        id: 33,
        postId: 18,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 33'
      },
      {
        id: 34,
        postId: 5,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 34'
      },
      {
        id: 35,
        postId: 29,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 35'
      },
      {
        id: 36,
        postId: 9,
        userId: 18,
        content: 'Tôi nghĩ đây là bình luận thứ 36'
      },
      {
        id: 37,
        postId: 31,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 37'
      },
      {
        id: 38,
        postId: 1,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 38'
      },
      {
        id: 39,
        postId: 20,
        userId: 1,
        content: 'Tôi nghĩ đây là bình luận thứ 39'
      },
      {
        id: 40,
        postId: 3,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 40'
      },
      {
        id: 41,
        postId: 32,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 41'
      },
      {
        id: 42,
        postId: 23,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 42'
      },
      {
        id: 43,
        postId: 16,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 43'
      },
      {
        id: 44,
        postId: 23,
        userId: 18,
        content: 'Tôi nghĩ đây là bình luận thứ 44'
      },
      {
        id: 45,
        postId: 23,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 45'
      },
      {
        id: 46,
        postId: 22,
        userId: 10,
        content: 'Tôi nghĩ đây là bình luận thứ 46'
      },
      {
        id: 47,
        postId: 33,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 47'
      },
      {
        id: 48,
        postId: 17,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 48'
      },
      {
        id: 49,
        postId: 5,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 49'
      },
      {
        id: 50,
        postId: 14,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 50'
      },
      {
        id: 51,
        postId: 4,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 51'
      },
      {
        id: 52,
        postId: 20,
        userId: 6,
        content: 'Tôi nghĩ đây là bình luận thứ 52'
      },
      {
        id: 53,
        postId: 18,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 53'
      },
      {
        id: 54,
        postId: 23,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 54'
      },
      {
        id: 55,
        postId: 5,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 55'
      },
      {
        id: 56,
        postId: 17,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 56'
      },
      {
        id: 57,
        postId: 32,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 57'
      },
      {
        id: 58,
        postId: 10,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 58'
      },
      {
        id: 59,
        postId: 3,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 59'
      },
      {
        id: 60,
        postId: 13,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 60'
      },
      {
        id: 61,
        postId: 8,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 61'
      },
      {
        id: 62,
        postId: 6,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 62'
      },
      {
        id: 63,
        postId: 9,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 63'
      },
      {
        id: 64,
        postId: 16,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 64'
      },
      {
        id: 65,
        postId: 26,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 65'
      },
      {
        id: 66,
        postId: 18,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 66'
      },
      {
        id: 67,
        postId: 17,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 67'
      },
      {
        id: 68,
        postId: 18,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 68'
      },
      {
        id: 69,
        postId: 11,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 69'
      },
      {
        id: 70,
        postId: 28,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 70'
      },
      {
        id: 71,
        postId: 13,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 71'
      },
      {
        id: 72,
        postId: 17,
        userId: 6,
        content: 'Tôi nghĩ đây là bình luận thứ 72'
      },
      {
        id: 73,
        postId: 21,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 73'
      },
      {
        id: 74,
        postId: 4,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 74'
      },
      {
        id: 75,
        postId: 26,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 75'
      },
      {
        id: 76,
        postId: 23,
        userId: 18,
        content: 'Tôi nghĩ đây là bình luận thứ 76'
      },
      {
        id: 77,
        postId: 18,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 77'
      },
      {
        id: 78,
        postId: 14,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 78'
      },
      {
        id: 79,
        postId: 7,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 79'
      },
      {
        id: 80,
        postId: 20,
        userId: 3,
        content: 'Tôi nghĩ đây là bình luận thứ 80'
      },
      {
        id: 81,
        postId: 15,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 81'
      },
      {
        id: 82,
        postId: 2,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 82'
      },
      {
        id: 83,
        postId: 33,
        userId: 10,
        content: 'Tôi nghĩ đây là bình luận thứ 83'
      },
      {
        id: 84,
        postId: 29,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 84'
      },
      {
        id: 85,
        postId: 26,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 85'
      },
      {
        id: 86,
        postId: 9,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 86'
      },
      {
        id: 87,
        postId: 14,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 87'
      },
      {
        id: 88,
        postId: 28,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 88'
      },
      {
        id: 89,
        postId: 31,
        userId: 18,
        content: 'Tôi nghĩ đây là bình luận thứ 89'
      },
      {
        id: 90,
        postId: 27,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 90'
      },
      {
        id: 91,
        postId: 19,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 91'
      },
      {
        id: 92,
        postId: 3,
        userId: 1,
        content: 'Tôi nghĩ đây là bình luận thứ 92'
      },
      {
        id: 93,
        postId: 15,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 93'
      },
      {
        id: 94,
        postId: 23,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 94'
      },
      {
        id: 95,
        postId: 30,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 95'
      },
      {
        id: 96,
        postId: 3,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 96'
      },
      {
        id: 97,
        postId: 27,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 97'
      },
      {
        id: 98,
        postId: 17,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 98'
      },
      {
        id: 99,
        postId: 18,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 99'
      },
      {
        id: 100,
        postId: 26,
        userId: 17,
        content: 'Tôi nghĩ đây là bình luận thứ 100'
      },
      {
        id: 101,
        postId: 9,
        userId: 3,
        content: 'Tôi nghĩ đây là bình luận thứ 101'
      },
      {
        id: 102,
        postId: 16,
        userId: 1,
        content: 'Tôi nghĩ đây là bình luận thứ 102'
      },
      {
        id: 103,
        postId: 12,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 103'
      },
      {
        id: 104,
        postId: 24,
        userId: 1,
        content: 'Tôi nghĩ đây là bình luận thứ 104'
      },
      {
        id: 105,
        postId: 14,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 105'
      },
      {
        id: 106,
        postId: 1,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 106'
      },
      {
        id: 107,
        postId: 22,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 107'
      },
      {
        id: 108,
        postId: 16,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 108'
      },
      {
        id: 109,
        postId: 30,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 109'
      },
      {
        id: 110,
        postId: 5,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 110'
      },
      {
        id: 111,
        postId: 6,
        userId: 10,
        content: 'Tôi nghĩ đây là bình luận thứ 111'
      },
      {
        id: 112,
        postId: 32,
        userId: 17,
        content: 'Tôi nghĩ đây là bình luận thứ 112'
      },
      {
        id: 113,
        postId: 6,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 113'
      },
      {
        id: 114,
        postId: 19,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 114'
      },
      {
        id: 115,
        postId: 32,
        userId: 6,
        content: 'Tôi nghĩ đây là bình luận thứ 115'
      },
      {
        id: 116,
        postId: 33,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 116'
      },
      {
        id: 117,
        postId: 14,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 117'
      },
      {
        id: 118,
        postId: 9,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 118'
      },
      {
        id: 119,
        postId: 10,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 119'
      },
      {
        id: 120,
        postId: 17,
        userId: 1,
        content: 'Tôi nghĩ đây là bình luận thứ 120'
      },
      {
        id: 121,
        postId: 3,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 121'
      },
      {
        id: 122,
        postId: 12,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 122'
      },
      {
        id: 123,
        postId: 5,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 123'
      },
      {
        id: 124,
        postId: 29,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 124'
      },
      {
        id: 125,
        postId: 12,
        userId: 18,
        content: 'Tôi nghĩ đây là bình luận thứ 125'
      },
      {
        id: 126,
        postId: 20,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 126'
      },
      {
        id: 127,
        postId: 15,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 127'
      },
      {
        id: 128,
        postId: 18,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 128'
      },
      {
        id: 129,
        postId: 8,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 129'
      },
      {
        id: 130,
        postId: 14,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 130'
      },
      {
        id: 131,
        postId: 2,
        userId: 18,
        content: 'Tôi nghĩ đây là bình luận thứ 131'
      },
      {
        id: 132,
        postId: 23,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 132'
      },
      {
        id: 133,
        postId: 6,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 133'
      },
      {
        id: 134,
        postId: 24,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 134'
      },
      {
        id: 135,
        postId: 14,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 135'
      },
      {
        id: 136,
        postId: 16,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 136'
      },
      {
        id: 137,
        postId: 21,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 137'
      },
      {
        id: 138,
        postId: 31,
        userId: 18,
        content: 'Tôi nghĩ đây là bình luận thứ 138'
      },
      {
        id: 139,
        postId: 2,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 139'
      },
      {
        id: 140,
        postId: 27,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 140'
      },
      {
        id: 141,
        postId: 27,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 141'
      },
      {
        id: 142,
        postId: 15,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 142'
      },
      {
        id: 143,
        postId: 18,
        userId: 7,
        content: 'Tôi nghĩ đây là bình luận thứ 143'
      },
      {
        id: 144,
        postId: 5,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 144'
      },
      {
        id: 145,
        postId: 31,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 145'
      },
      {
        id: 146,
        postId: 7,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 146'
      },
      {
        id: 147,
        postId: 8,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 147'
      },
      {
        id: 148,
        postId: 10,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 148'
      },
      {
        id: 149,
        postId: 4,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 149'
      },
      {
        id: 150,
        postId: 16,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 150'
      },
      {
        id: 151,
        postId: 29,
        userId: 6,
        content: 'Tôi nghĩ đây là bình luận thứ 151'
      },
      {
        id: 152,
        postId: 11,
        userId: 17,
        content: 'Tôi nghĩ đây là bình luận thứ 152'
      },
      {
        id: 153,
        postId: 25,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 153'
      },
      {
        id: 154,
        postId: 17,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 154'
      },
      {
        id: 155,
        postId: 1,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 155'
      },
      {
        id: 156,
        postId: 5,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 156'
      },
      {
        id: 157,
        postId: 26,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 157'
      },
      {
        id: 158,
        postId: 30,
        userId: 3,
        content: 'Tôi nghĩ đây là bình luận thứ 158'
      },
      {
        id: 159,
        postId: 30,
        userId: 17,
        content: 'Tôi nghĩ đây là bình luận thứ 159'
      },
      {
        id: 160,
        postId: 24,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 160'
      },
      {
        id: 161,
        postId: 31,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 161'
      },
      {
        id: 162,
        postId: 11,
        userId: 17,
        content: 'Tôi nghĩ đây là bình luận thứ 162'
      },
      {
        id: 163,
        postId: 11,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 163'
      },
      {
        id: 164,
        postId: 17,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 164'
      },
      {
        id: 165,
        postId: 16,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 165'
      },
      {
        id: 166,
        postId: 28,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 166'
      },
      {
        id: 167,
        postId: 4,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 167'
      },
      {
        id: 168,
        postId: 12,
        userId: 17,
        content: 'Tôi nghĩ đây là bình luận thứ 168'
      },
      {
        id: 169,
        postId: 1,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 169'
      },
      {
        id: 170,
        postId: 32,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 170'
      },
      {
        id: 171,
        postId: 16,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 171'
      },
      {
        id: 172,
        postId: 11,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 172'
      },
      {
        id: 173,
        postId: 7,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 173'
      },
      {
        id: 174,
        postId: 13,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 174'
      },
      {
        id: 175,
        postId: 20,
        userId: 14,
        content: 'Tôi nghĩ đây là bình luận thứ 175'
      },
      {
        id: 176,
        postId: 7,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 176'
      },
      {
        id: 177,
        postId: 25,
        userId: 3,
        content: 'Tôi nghĩ đây là bình luận thứ 177'
      },
      {
        id: 178,
        postId: 20,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 178'
      },
      {
        id: 179,
        postId: 23,
        userId: 10,
        content: 'Tôi nghĩ đây là bình luận thứ 179'
      },
      {
        id: 180,
        postId: 5,
        userId: 10,
        content: 'Tôi nghĩ đây là bình luận thứ 180'
      },
      {
        id: 181,
        postId: 21,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 181'
      },
      {
        id: 182,
        postId: 4,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 182'
      },
      {
        id: 183,
        postId: 7,
        userId: 1,
        content: 'Tôi nghĩ đây là bình luận thứ 183'
      },
      {
        id: 184,
        postId: 26,
        userId: 13,
        content: 'Tôi nghĩ đây là bình luận thứ 184'
      },
      {
        id: 185,
        postId: 13,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 185'
      },
      {
        id: 186,
        postId: 14,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 186'
      },
      {
        id: 187,
        postId: 21,
        userId: 11,
        content: 'Tôi nghĩ đây là bình luận thứ 187'
      },
      {
        id: 188,
        postId: 17,
        userId: 19,
        content: 'Tôi nghĩ đây là bình luận thứ 188'
      },
      {
        id: 189,
        postId: 29,
        userId: 3,
        content: 'Tôi nghĩ đây là bình luận thứ 189'
      },
      {
        id: 190,
        postId: 10,
        userId: 4,
        content: 'Tôi nghĩ đây là bình luận thứ 190'
      },
      {
        id: 191,
        postId: 3,
        userId: 9,
        content: 'Tôi nghĩ đây là bình luận thứ 191'
      },
      {
        id: 192,
        postId: 28,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 192'
      },
      {
        id: 193,
        postId: 10,
        userId: 16,
        content: 'Tôi nghĩ đây là bình luận thứ 193'
      },
      {
        id: 194,
        postId: 23,
        userId: 8,
        content: 'Tôi nghĩ đây là bình luận thứ 194'
      },
      {
        id: 195,
        postId: 31,
        userId: 17,
        content: 'Tôi nghĩ đây là bình luận thứ 195'
      },
      {
        id: 196,
        postId: 25,
        userId: 5,
        content: 'Tôi nghĩ đây là bình luận thứ 196'
      },
      {
        id: 197,
        postId: 13,
        userId: 12,
        content: 'Tôi nghĩ đây là bình luận thứ 197'
      },
      {
        id: 198,
        postId: 19,
        userId: 2,
        content: 'Tôi nghĩ đây là bình luận thứ 198'
      },
      {
        id: 199,
        postId: 5,
        userId: 15,
        content: 'Tôi nghĩ đây là bình luận thứ 199'
      }
    ]

    return { users, posts, comments };
  }
}
