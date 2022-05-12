import Image from "next/image"
import ProductForm from "./ProductForm"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper'

const ProductPageContent = ({ product }) => {

	const images = []

	product.images.edges.map((image,i) => {
		images.push(
			<SwiperSlide key={`slide-${i}`}>
				<Image src={image.node.originalSrc} alt={image.node.altText} layout="fill" objectFit="cover" />
			</SwiperSlide>
		)
	})


	return (
		<div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl mx-auto">
			<div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
				<div className="relative h-96 w-full">
					{
						images.length > 1 ?
							<Swiper
								modules={[Navigation, Pagination]}
								style= {{'--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000'}}
								navigation
								pagination={{ clickable: true }}
								className="h-96 rounded-2xl"
								loop="true"
							>
								{images}
							</Swiper> 
						: images
					}
				</div>
			</div>
			<ProductForm product={product} />
		</div>
	)
}

export default ProductPageContent