import Image from 'next/image';

import Jake from '../../assets/jake-sm.jpg';
import Emily from '../../assets/emily-sm.jpg';

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-light text-center">About Us</h1>
      <p className="mt-4 text-center">
        Welcome to Good Company! We&apos;re so happy you're here. We could write
        a whole blurb about how this came to be due to our grand ideas for
        community, connection, and friendship; but truthfully this idea was
        inspired by a TikTok Emily saw earlier this year. Though the concept was
        not originally ours, it has grown into one of our favorite days of each
        month. We spend so much time connecting with each other through text and
        social media, it is easy to forget the beauty of true human interaction.
        So come for the coffee and pastries, stay for the vibes and good times
      </p>

      <h2 className="text-2xl font-semibold text-center mt-8">Our Barista</h2>
      <div className="flex sm:flex-col-reverse lg:flex-row-reverse lg:items-start mt-8">
        {/* bio - jake */}
        <div className="lg:w-2/3 sm:mt-8 lg:mt-0">
          <p>
            Jake first started drinking coffee in high school from the
            McDonald&apos;s down the street. He would drive there with his mom
            every day afternoon to learn how to drive, and force himself to like
            coffee. His order was 6 creams and 6 sugars, reheated the next
            morning before school, to be exact. After many coffees, a job at
            Starbucks to learn the gist of operating a busy espresso bar, years
            of tinkering with different ways of brewing coffee, and an intensive
            coffee tasting class, he&apos;s discovered a new interest in
            specialty coffee. Don&apos;t worry, he still loves his sweet coffees
            too! Jake loves to share his coffee and coffee knowledge with the
            people he cares about, and hopes you enjoy his drinks and homemade
            syrups each month at Good Company!
          </p>
        </div>
        {/* photo - jake */}
        <div className="md:w-2/3 md:self-center lg:self-auto items-center lg:w-1/3 lg:mr-4">
          <Image src={Jake} alt="Photo of a very mustached Jake" />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mt-8">
        Our Pastry Chef
      </h2>
      <div className="flex sm:flex-col-reverse lg:flex-row mt-8 lg:items-start">
        {/* bio - emily */}
        <div className="lg:w-2/3 lg:mr-4 sm:mt-8 lg:mt-0">
          <p>
            Emily&apos;s love for pastries and desserts developed in her early
            teens after the premiere of what would become her favorite after
            school show, Cake Boss. Emily experimented with different types of
            cake decorating techniques throughout high school, and relied mostly
            on boxed cake mixes. Eventually, she began taking an interest in
            making desserts from scratch, and received a lot of positive
            feedback for her first from scratch dessert: the brown butter
            pumpkin cupcake with a brown butter glaze, and a Nutella filling.
            This inspired her to try more recipes, and experiment with new
            flavors. Through small New York City kitchens, broken ovens, and
            limited materials, Emily persevered and kept her passion for baking
            alive. Emily is excited to be able to share her pastries each month
            at Good Company, and hopes you enjoy them too!
          </p>
        </div>
        {/* photo - emily */}
        <div className="md:w-2/3 md:self-center lg:self-auto lg:w-1/3 lg:mr-4">
          <Image src={Emily} alt="Photo of a very cute and perfect Emily" />
        </div>
      </div>
    </div>
  );
}
