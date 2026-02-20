import { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } from "../utils/keys";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: CLOUD_NAME,
    apiKey: CLOUD_API_KEY,
    apiSecret: CLOUD_API_SECRET_KEY,
  },
  secure: true,
});

const eze = cloudinary.image("yo")
export const ezequiel = eze.resize(fill().width(800).height(800))
const ubk = cloudinary.image("homeubk")
export const ulbakuya = ubk.resize(fill().width(800).height(600))
const portfolio = cloudinary.image("portfolioviejo")
export const portfoliov = portfolio.resize(fill().width(800).height(600))


const image1 = cloudinary.image("portfolio/html2")
const image2 = cloudinary.image("portfolio/css4")
const image3 = cloudinary.image("portfolio/js")
const image4 = cloudinary.image("portfolio/node2")
const image5 = cloudinary.image("portfolio/express2")
const image6 = cloudinary.image("portfolio/react2")
const image7 = cloudinary.image("portfolio/vite2")
const image8 = cloudinary.image("portfolio/zustand")
const image9 = cloudinary.image("portfolio/tanstack")
const image10 = cloudinary.image("portfolio/json2")
const image11 = cloudinary.image("portfolio/tailwind3")
const image12 = cloudinary.image("portfolio/sequelize2")
const image13 = cloudinary.image("portfolio/postgre3")
const image14 = cloudinary.image("portfolio/redux2")


export const html = image1.resize(fill().width(100).height(100))
export const css = image2.resize(fill().width(100).height(100))
export const js = image3.resize(fill().width(100).height(100))
export const node = image4.resize(fill().width(100).height(100))
export const express = image5.resize(fill().width(100).height(100))
export const react = image6.resize(fill().width(100).height(100))
export const vite = image7.resize(fill().width(100).height(100))
export const zustand = image8.resize(fill().width(120).height(100))
export const tanstack = image9.resize(fill().width(100).height(100))
export const json = image10.resize(fill().width(100).height(100))
export const tailwind = image11.resize(fill().width(120).height(100))
export const sequelize = image12.resize(fill().width(100).height(100))
export const postgre = image13.resize(fill().width(100).height(100))
export const redux = image14.resize(fill().width(100).height(100))

const image15 = cloudinary.image("portfolio/cm")
const image16 = cloudinary.image("portfolio/ef")
const image17 = cloudinary.image("portfolio/lider")
const image18 = cloudinary.image("portfolio/henry")
const image19 = cloudinary.image("portfolio/redes")

export const cm = image15.resize(fill().width(700).height(500))
export const efset = image16.resize(fill().width(700).height(500))
export const lider = image17.resize(fill().width(700).height(500))
export const henry = image18.resize(fill().width(700).height(500))
export const redes = image19.resize(fill().width(700).height(500))


const link = cloudinary.image("redes/linkedin2")
const git = cloudinary.image("redes/github2")
const mail = cloudinary.image("redes/gmail")
const wsp = cloudinary.image("redes/whatsapp")

export const github = git.resize(fill().width(100).height(100))
export const linkedin = link.resize(fill().width(100).height(100))
export const gmail = mail.resize(fill().width(150).height(150))
export const whatsapp = wsp.resize(fill().width(75).height(75))
