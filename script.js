const hienThiMacbook = document.getElementById('hu_macbook');
const hienThiIphone = document.getElementById('hu_iphone');
const hienThiDuPhong = document.getElementById('hu_du_phong');
const hienThiDuLich = document.getElementById('hu_du_lich');
const hienThiNha = document.getElementById('hu_nha');
const hienThiOto = document.getElementById('hu_oto');
const hienThiXeMay = document.getElementById('hu_xe_may');
const hienThiThiChungChi = document.getElementById('hu_thi_chungchi');
const hienThiHocLai = document.getElementById('hu_hoc_lai');
const mucTieuTietKiem = document.getElementById('muc-tieu-tiet-kiem');

const nutThem = document.getElementById('nut_them');
const oNhaptien = document.getElementById('o_nhaptien');
const DanhMuc = document.getElementById('danh-muc');
const loaiGiaoDich = document.getElementById('loai-giao-dich'); 
const soduHientai = document.getElementById('sodu_hientai');
const hienThiTietKiem = document.getElementById('tien_tiet_kiem'); 
const thanBang = document.getElementById('than-bang');

const hienThiTongThu = document.getElementById('tong_thu_thang');
const hienThiTongChi = document.getElementById('tong_chi_thang');
const boLocGiaoDich = document.getElementById('bo-loc-giao-dich');
const nutReset = document.getElementById('nut_reset_app');

let ls_giaodich = JSON.parse(localStorage.getItem('doney_lichsu')) || [];

let tong_so_du = 0;
let tong_tiet_kiem = 0;
let tong_thu_thang = 0;
let tong_chi_thang = 0;
let cac_hu_tiet_kiem = { macbook:0, iphone: 0, du_phong: 0, du_lich: 0, oto:0, xe_may:0, nha:0,thi_chungchi:0, hoc_lai:0 };


function tinhToanLaiToanBoHeThong() {
    tong_so_du = 0;
    tong_tiet_kiem = 0;
    tong_thu_thang = 0;
    tong_chi_thang = 0;
    cac_hu_tiet_kiem = { macbook:0, iphone: 0, du_phong: 0, du_lich: 0, oto:0, xe_may:0, nha:0, thi_chungchi:0, hoc_lai:0 };

    ls_giaodich.forEach(function(gd) {
        if (gd.loai_gd === "thu") {
            tong_so_du += gd.sotien;
            tong_thu_thang += gd.sotien;
        } else if (gd.loai_gd === "chi") {
            tong_so_du -= gd.sotien;
            tong_chi_thang += gd.sotien;
        } 

        else if (gd.loai_gd && (gd.loai_gd.includes("tiet") || gd.loai_gd.includes("kiem")) && gd.loai_gd !== "rut-tiet-kiem") {
            tong_so_du -= gd.sotien;
            tong_tiet_kiem += gd.sotien;
            
            if (gd.muc_tieu_gd === "iphone") cac_hu_tiet_kiem.iphone += gd.sotien;

            else if (gd.muc_tieu_gd === "macbook_moi") cac_hu_tiet_kiem.macbook +=gd.sotien;
            else if (gd.muc_tieu_gd === "du_phong") cac_hu_tiet_kiem.du_phong += gd.sotien;
            else if (gd.muc_tieu_gd === "du_lich") cac_hu_tiet_kiem.du_lich += gd.sotien;

              else if(gd.muc_tieu_gd === "oto") cac_hu_tiet_kiem.oto += gd.sotien;

            else if(gd.muc_tieu_gd === "xe_may") cac_hu_tiet_kiem.xe_may += gd.sotien;

            else if(gd.muc_tieu_gd === "nha") cac_hu_tiet_kiem.nha += gd.sotien;

            else if(gd.muc_tieu_gd === "thi_chungchi") cac_hu_tiet_kiem.thi_chungchi += gd.sotien;
    

            else if(gd.muc_tieu_gd === "hoc_lai") cac_hu_tiet_kiem.hoc_lai += gd.sotien;

        
        } 
        else if (gd.loai_gd === "rut-tiet-kiem") {
            tong_so_du += gd.sotien;
            tong_tiet_kiem -= gd.sotien;
            
            if (gd.muc_tieu_gd === "iphone") cac_hu_tiet_kiem.iphone -= gd.sotien;
            else if(gd.muc_tieu_gd === "macbook_moi") cac_hu_tiet_kiem.macbook -= gd.sotien;
            else if (gd.muc_tieu_gd === "du_phong") cac_hu_tiet_kiem.du_phong -= gd.sotien;
            else if (gd.muc_tieu_gd === "du_lich") cac_hu_tiet_kiem.du_lich -= gd.sotien;

            else if(gd.muc_tieu_gd === "oto") cac_hu_tiet_kiem.oto -= gd.sotien;

            else if(gd.muc_tieu_gd === "xe_may") cac_hu_tiet_kiem.xe_may -= gd.sotien;

            else if(gd.muc_tieu_gd === "nha") cac_hu_tiet_kiem.nha -= gd.sotien;

            else if(gd.muc_tieu_gd === "thi_chungchi") cac_hu_tiet_kiem.thi_chungchi -= gd.sotien;

            else if(gd.muc_tieu_gd === "hoc_lai") cac_hu_tiet_kiem.hoc_lai -= gd.sotien;
        }
    });

    localStorage.setItem('doney_lichsu', JSON.stringify(ls_giaodich));

    soduHientai.innerText = tong_so_du.toLocaleString('vi-VN');
    if(hienThiMacbook) hienThiMacbook.innerText = cac_hu_tiet_kiem.macbook.toLocaleString('vi-VN') + " đ";
    if (hienThiIphone) hienThiIphone.innerText = cac_hu_tiet_kiem.iphone.toLocaleString('vi-VN') + " đ";
    if (hienThiDuPhong) hienThiDuPhong.innerText = cac_hu_tiet_kiem.du_phong.toLocaleString('vi-VN') + " đ";
    if (hienThiDuLich) hienThiDuLich.innerText = cac_hu_tiet_kiem.du_lich.toLocaleString('vi-VN') + " đ";
    if (hienThiNha) hienThiNha.innerText = cac_hu_tiet_kiem.nha.toLocaleString('vi-VN') + " đ";
    if (hienThiXeMay) hienThiXeMay.innerText = cac_hu_tiet_kiem.xe_may.toLocaleString('vi-VN') + " đ";
    if (hienThiOto) hienThiOto.innerText = cac_hu_tiet_kiem.oto.toLocaleString('vi-VN') + " đ";
    if (hienThiThiChungChi) hienThiThiChungChi.innerText = cac_hu_tiet_kiem.thi_chungchi.toLocaleString('vi-VN') + " đ";
    if (hienThiHocLai) hienThiHocLai.innerText = cac_hu_tiet_kiem.hoc_lai.toLocaleString('vi-VN') + " đ";
    if (hienThiTietKiem) hienThiTietKiem.innerText = tong_tiet_kiem.toLocaleString('vi-VN');  
    
    if (hienThiTongThu) hienThiTongThu.innerText = tong_thu_thang.toLocaleString('vi-VN');
    if (hienThiTongChi) hienThiTongChi.innerText = tong_chi_thang.toLocaleString('vi-VN');
}


function veLaiBangLichSu(loaiBoLoc = "tat_ca") {
    if (!thanBang) return;
    thanBang.innerHTML = ""; 
    
    ls_giaodich.forEach(function(giaoDich, index) {
        if (loaiBoLoc !== "tat_ca") {
            if (loaiBoLoc === "tiet-kiem" && !giaoDich.loai_gd.includes("tiet") && !giaoDich.loai_gd.includes("kiem") && giaoDich.loai_gd !== "rut-tiet-kiem") return;
            if (loaiBoLoc !== "tiet-kiem" && giaoDich.loai_gd !== loaiBoLoc) return;
        }

        let mauChu = "green";
        let dauTien = "+";
        let loaiHienThi = "Thu";

        if (giaoDich.loai_gd === "chi") { 
            mauChu = "red"; dauTien = "-"; loaiHienThi = "Chi";
        } else if (giaoDich.loai_gd && (giaoDich.loai_gd.includes("tiet") || giaoDich.loai_gd.includes("kiem")) && giaoDich.loai_gd !== "rut-tiet-kiem") { 
            mauChu = "blue"; dauTien = "🐷 "; loaiHienThi = "Tiết kiệm";
        } else if (giaoDich.loai_gd === "rut-tiet-kiem") {
            mauChu = "purple"; dauTien = "🔓 "; loaiHienThi = "Rút tiết kiệm";
        }

        let hang_html = `
            <tr>
                <td>${giaoDich.ngay}</td>
                <td>${giaoDich.danh_muc} (${loaiHienThi})</td>
                <td style="color: ${mauChu}; font-weight: bold;">${dauTien}${giaoDich.sotien.toLocaleString('vi-VN')}</td>
                <td>
                    <button onclick="suaGiaoDich(${index})" style="background-color: #f1c40f;">Sửa</button>
                    <button onclick="xoaGiaoDich(${index})" style="background-color: #e74c3c; margin-left: 2px;">Xóa</button>
                </td>
            </tr>
        `;
        thanBang.innerHTML += hang_html;
    });
}

if (boLocGiaoDich) {
    boLocGiaoDich.addEventListener('change', function() {
        veLaiBangLichSu(boLocGiaoDich.value);
    });
}

if (nutReset) {
    nutReset.addEventListener('click', function() {
        if (confirm("CẢNH BÁO: Hành động này xóa toàn bộ dữ liệu dòng tiền vĩnh viễn! Bạn muốn tiếp tục?")) {
            ls_giaodich = [];
            tinhToanLaiToanBoHeThong();
            veLaiBangLichSu();
        }
    });
}

window.xoaGiaoDich = function(index) {
    if (confirm("Bạn chắc chắn muốn xóa vĩnh viễn giao dịch này?")) {
        ls_giaodich.splice(index, 1);
        tinhToanLaiToanBoHeThong();
        veLaiBangLichSu(boLocGiaoDich ? boLocGiaoDich.value : "tat_ca");
    }
}

window.suaGiaoDich = function(index) {
    let gdHienTai = ls_giaodich[index];
    let soTienMoi = prompt(`Nhập số tiền thay đổi mới (Hiện tại: ${gdHienTai.sotien}):`, gdHienTai.sotien);
    if (soTienMoi === null) return; // Người dùng ấn hủy bỏ form
    
    soTienMoi = Number(soTienMoi);
    if (isNaN(soTienMoi) || soTienMoi <= 0) {
        alert("Giá trị số nhập vào không hợp lệ!");
        return;
    }
    
    ls_giaodich[index].sotien = soTienMoi;
    tinhToanLaiToanBoHeThong();
    veLaiBangLichSu(boLocGiaoDich ? boLocGiaoDich.value : "tat_ca");
}


nutThem.addEventListener('click', function(){
    let sotiendaNhap = Number(oNhaptien.value);
    let danhmuc = DanhMuc.value;
    let loai = loaiGiaoDich.value; 
    let mucTieu = mucTieuTietKiem.value;

    if(sotiendaNhap <= 0 || oNhaptien.value === ""){
        alert("Vui lòng cung cấp số tiền hợp lệ lớn hơn 0");
        return;
    }

    let tenMucTieuHienThi = ""; 
    let laTietKiem = loai && (loai.includes("tiet") || loai.includes("kiem")) && loai !== "rut-tiet-kiem";

    if (mucTieu === "iphone") tenMucTieuHienThi = "Mua iPhone";
    else if (mucTieu === "macbook_moi") tenMucTieuHienThi = "Mua Macbook mới";
    else if (mucTieu === "du_phong") tenMucTieuHienThi = "Quỹ dành cho em Pii";
    else if (mucTieu === "du_lich") tenMucTieuHienThi = "Đi du lịch";

    else if (mucTieu === "nha") tenMucTieuHienThi = "Quỹ mua nhà";

    else if (mucTieu === "oto") tenMucTieuHienThi = "Quỹ mua Oto";

    else if (mucTieu === "xe_may") tenMucTieuHienThi = "Quỹ mua xe máy mới";

    else if (mucTieu === "thi_chungchi") tenMucTieuHienThi = "Quỹ thi chứng chỉ";

    else if (mucTieu === "hoc_lai") tenMucTieuHienThi = "Quỹ học lại";

    

    if (laTietKiem) {
        if (tong_so_du < sotiendaNhap) {
            alert("Ví chính không đủ số dư để chuyển vào hũ tiết kiệm!");
            return;
        }
    } else if (loai === "rut-tiet-kiem") {
        if (cac_hu_tiet_kiem[mucTieu] < sotiendaNhap) {
            alert(`Hũ [${tenMucTieuHienThi}] không đủ số dư để thực hiện rút! (Hiện tại có: ${cac_hu_tiet_kiem[mucTieu].toLocaleString('vi-VN')} VNĐ)`);
            return;
        }
    }

    let ngayHientai = new Date().toLocaleDateString('vi-VN');
    let tenDanhMucLuuTru = danhmuc;
    if (laTietKiem) tenDanhMucLuuTru = `Gửi heo đất: ${tenMucTieuHienThi}`;
    else if (loai === "rut-tiet-kiem") tenDanhMucLuuTru = `Đập heo rút: ${tenMucTieuHienThi}`;

    let giao_dich_moi = {
        ngay: ngayHientai,
        danh_muc: tenDanhMucLuuTru,
        sotien: sotiendaNhap,
        loai_gd: loai,
        muc_tieu_gd: (laTietKiem || loai === "rut-tiet-kiem") ? mucTieu : null
    };
    ls_giaodich.push(giao_dich_moi);

    tinhToanLaiToanBoHeThong();
    veLaiBangLichSu(boLocGiaoDich ? boLocGiaoDich.value : "tat_ca");

    oNhaptien.value = "";
});

const btnDashboard = document.getElementById('btn-tab-dashboard');
const btnHistory = document.getElementById('btn-tab-history');
const contentDashboard = document.getElementById('tab-content-dashboard');
const contentHistory = document.getElementById('tab-content-history');

if (btnDashboard && btnHistory) {
    btnDashboard.addEventListener('click', function() {
        contentDashboard.style.display = 'block';
        contentHistory.style.display = 'none';
        btnDashboard.classList.add('active');
        btnHistory.classList.remove('active');
    });

    btnHistory.addEventListener('click', function() {
        contentDashboard.style.display = 'none';
        contentHistory.style.display = 'block';
        btnHistory.classList.add('active');
        btnDashboard.classList.remove('active');
    });
}

tinhToanLaiToanBoHeThong();
veLaiBangLichSu();
