import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import CustomForm from "../components/form-component/CustomForm";
import CustomSelect from "../components/form-component/CustomSelect";
import RegisterButton from "../components/form-component/RegisterButton";

function ProductDetail() {
  const [addProduct, setAddProduct] = useState(true);
  const [myProduct, setMyproduct] = useState(false);
  const [images, setImage] = useState(null);
  const imgArea = document.querySelector("#image-preview");

  const loginSchema = Yup.object().shape({
    productname: Yup.string().required("Must not blank"),
    description: Yup.string().required("Must not blank"),
    category: Yup.string()
      .oneOf(
        ["electronic", "laptop/pc", "furniture", "kitchen-util"],
        "Invalid input"
      )
      .required("Required"),
    price: Yup.number().required("Must not blank"),
    quantity: Yup.number()
      .min(1, "Minimum quantity: 1")
      .required("Must not blank"),
  });

  const selectImage = () => {
    document.querySelector("#image-upload").click();
  };

  const onSubmit = async (values, actions) => {
    const { productname, category, description, price, quantity } = values;
    // console.log(values);
    // console.log(images);
    let formData = new FormData();
    const productData = {
      product_name: productname,
      product_description: description,
      product_price: price,
      product_quantity: quantity,
      product_category: category,
    };
    formData.append("data", JSON.stringify(productData));
    formData.append("image", images);
    console.log(formData);
  };
  // The useState hook is asynchronous, which means that images will not have
  // the updated value immediately after calling setImage().
  // Instead, you can use the useEffect hook to run a
  // function every time images changes:
  useEffect(() => {}, [images]);

  const imageOnChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    imgArea.removeChild(imgArea.lastChild);
    reader.onload = () => {
      const imgUrl = reader.result;
      const img = document.createElement("img");
      img.src = imgUrl;
      imgArea.appendChild(img);
      img.classList.add(
        "absolute",
        "top-0",
        "left-0",
        "rounded-xl",
        "z-50",
        "h-full",
        "w-full"
      );
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="dark:bg-gray-900 text-dark pt-28 px-4 lg:pt-32 secondary-font">
      <div className="w-full ml-8">
        <button
          onClick={() => {
            setAddProduct(true);
            setMyproduct(false);
          }}
          className={
            addProduct
              ? " text-base font-bold leading-tight text-white lg:text-xl relative z-[1]" +
                " dark:text-white main-font tracking-normal bg-secondary rounded-lg py-2 px-5"
              : " text-base font-bold leading-tight text-secondary lg:text-xl relative" +
                " dark:text-white main-font tracking-normal bg-slate-100 z-0 rounded-lg py-2 px-5"
          }
        >
          Add Product
        </button>
        <button
          onClick={() => {
            setAddProduct(false);
            setMyproduct(true);
          }}
          className={
            myProduct
              ? " text-base font-bold leading-tight text-white lg:text-xl z-[1] relative -ml-3" +
                " dark:text-white main-font tracking-normal bg-secondary rounded-lg py-2 px-5 mx-0"
              : " text-base font-bold leading-tight text-secondary lg:text-xl relative -ml-3" +
                " dark:text-white main-font tracking-normal bg-slate-100 z-0 rounded-lg py-2 px-5 mx-0"
          }
        >
          My Products
        </button>
        <div
          className=" border-4 -mt-1 mr-6 relative z-[1] rounded-lg -ml-4 border-secondary 
          max-w-md md:max-w-3xl lg:-ml-2 lg:max-w-6xl"
        >
          {addProduct && (
            <div className="px-4 py-4">
              <div className="max-w-md mx-auto mt-8 text-center">
                <h1 className="text-xl lg:text-4xl text-secondary font-semibold">
                  Upload Produk
                </h1>
                <p className=" text-xs font-extralight lg:text-base secondary-font leading-[0.9rem] mt-3">
                  Hindarilah berjualan produk palsu/melanggar Hak Kekayaan
                  Intelektual Intelektual, supaya produkmu tidak dihapus.
                </p>
              </div>
              <Formik
                initialValues={{
                  productname: "",
                  category: "",
                  description: "",
                  price: 0,
                  quantity: 1,
                }}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
              >
                {(props) => {
                  return (
                    <Form className="secondary-font">
                      <div className="mt-16 md:flex md:justify-between">
                        <div className="w-full lg:w-1/2 my-auto">
                          <h1 className="text-sm lg:text-base text-secondary font-semibold">
                            Foto Produk
                          </h1>
                          <p
                            className=" text-xs lg:text-sm secondary-font leading-[0.9rem] 
                          mt-1 md:max-w-sm lg:max-w-md"
                          >
                            Format gambar .jpg .jpeg .png dan ukuran minimum
                            300x300px (untuk gambar optimal gunakan 700x700px).
                          </p>
                        </div>
                        <div className="mr-40 md:mr-20 lg:mr-40">
                          <input
                            type="file"
                            id="image-upload"
                            accept="image/png, image/jpeg"
                            className="hidden"
                            onChange={imageOnChange}
                          />
                          <div
                            id="image-preview"
                            className="my-4 bg-gray-200 w-52 h-52 flex hover:cursor-pointer
                          flex-col items-center justify-center mx-auto rounded-xl group relative"
                            onClick={selectImage}
                          >
                            <i
                              className="uil uil-image-upload text-dark text-2xl
                             font-thin group-hover:text-primary"
                            ></i>
                            <h1 className="text-xs group-hover:text-primary">
                              Upload Image
                            </h1>
                            <h3></h3>
                          </div>
                        </div>
                      </div>
                      <hr className="my-8 mx-auto" />
                      <div className="">
                        <h1 className="text-base lg:text-lg mb-6 text-secondary font-semibold">
                          Informasi Produk
                        </h1>
                        <div className="lg:flex my-12 lg:gap-6">
                          <div className="w-full lg:w-1/2">
                            <h1 className="text-sm lg:text-base text-secondary font-semibold">
                              Nama Produk
                            </h1>
                            <p
                              className=" text-xs lg:text-sm secondary-font leading-[0.9rem] mt-1 
                            lg:max-w-md"
                            >
                              Cantumkan nama produk minimal 40 karakter agar
                              semakin menarik dan mudah ditemukan oleh pembeli,
                              terdiri dari jenis produk, merk produk dan
                              lainnya.
                            </p>
                          </div>
                          <div className="py-4 lg:flex-col w-full items-center justify-center my-auto">
                            <CustomForm
                              name="productname"
                              type="text"
                              id="productname"
                              placeholder="Enter your product name"
                            />
                          </div>
                        </div>
                        <div className="lg:flex my-12 lg:gap-6">
                          <div className="w-full lg:w-1/2">
                            <h1 className="text-sm lg:text-base text-secondary font-semibold">
                              Deskripsi Produk
                            </h1>
                            <p
                              className=" text-xs lg:text-sm secondary-font leading-[0.9rem] mt-1 
                            lg:max-w-md"
                            >
                              Pastikan deskripsi produk memuat penjelasan detail
                              terkait produkmu agar pembeli mudah mengerti dan
                              menemukan produkmu.
                            </p>
                            <p
                              className=" text-xs mt-2 lg:text-sm secondary-font leading-[0.9rem] 
                            lg:max-w-md"
                            >
                              Disarankan untuk tidak memasukkan info no HP,
                              email, dsb. ke dalam deskripsi produk untuk
                              melindungi data pribadimu.
                            </p>
                          </div>
                          <div className="py-4 lg:flex-col w-full items-center justify-center my-auto">
                            <CustomForm
                              name="description"
                              id="description"
                              placeholder="Enter your product description"
                            />
                          </div>
                        </div>
                        <div className="lg:flex my-12 lg:gap-6">
                          <div className="w-full lg:w-1/2">
                            <h1 className="text-sm lg:text-base text-secondary font-semibold">
                              Kategori Produk
                            </h1>
                            <p
                              className=" text-xs lg:text-sm secondary-font leading-[0.9rem] mt-1 
                            lg:max-w-md"
                            >
                              Pilih kategori yang sesuai untuk memudahkan
                              pelanggan menemukan produkmu dengan kategori yang
                              terkait.
                            </p>
                          </div>
                          <div className="py-4 lg:flex-col w-full items-center justify-center my-auto">
                            <CustomSelect name="category" id="category">
                              <option value="">Choose a category</option>
                              <option value="electronic">Electronic</option>
                              <option value="laptop/pc">Laptop/PC</option>
                              <option value="furniture">Furniture</option>
                              <option value="kitchen-util">Kitchen-set</option>
                            </CustomSelect>
                          </div>
                        </div>
                        <div className="lg:flex my-12 lg:gap-6">
                          <div className="w-full lg:w-1/2">
                            <h1 className="text-sm lg:text-base text-secondary font-semibold">
                              Banyak produk
                            </h1>
                            <p
                              className=" text-xs lg:text-sm secondary-font leading-[0.9rem] mt-1 
                            lg:max-w-md"
                            >
                              Cantumkan jumlah awal barang yang akan
                              ditampilkan. minimal 1
                            </p>
                          </div>
                          <div className="py-4 lg:flex-col w-full items-center justify-center my-auto">
                            <CustomForm
                              name="quantity"
                              type="number"
                              id="quantity"
                              min="1"
                              placeholder="1"
                            />
                          </div>
                        </div>
                        <div className="lg:flex my-12 lg:gap-6">
                          <div className="w-full lg:w-1/2">
                            <h1 className="text-sm lg:text-base text-secondary font-semibold">
                              Harga produk
                            </h1>
                            <p
                              className=" text-xs lg:text-sm secondary-font leading-[0.9rem] mt-1 
                            lg:max-w-md"
                            >
                              Cantumkan harga satuan barang yang akan
                              ditampilkan.
                            </p>
                          </div>
                          <div className="py-4 lg:flex-col w-full items-center justify-center my-auto">
                            <CustomForm
                              name="price"
                              min="0"
                              type="number"
                              id="price"
                            />
                          </div>
                        </div>
                      </div>
                      <RegisterButton text="Submit" />
                    </Form>
                  );
                }}
              </Formik>
            </div>
          )}
          {myProduct && (
            <div className="px-4 py-4 text-secondary">My Product</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
