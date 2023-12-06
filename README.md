# My Portfolio Site

This is my first personal website. Next.js will fetch blogposts which is located on another github repository.

## Project section

[reference youtube tutorial](https://youtu.be/sUKptmUVIBM?si=K6yyL6WJ7dg0x7t0)

using framer motion to achieve the effect when the project section appear from bottom of the screen, each project card is animated as if it gradually scale to full size while continuously scroll.

wrap the card in <motion.div>, if use <motion.section>, the animation is not smooth.

```
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = ({ title, description, tags, imageUrl, siteUrl }) => {
  const ref = useRef(null);
  //   indicate how far we scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]); //starting size and opacity is 0.8

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: scaleProgress }}
      className="mb-3 sm:mb-8 last:mb-0
      group "
    >
    ...
```

## tailwind pseudo-classes in darkmode

If we want hover effect to change background color of cards, in dark mode, we have to define again hover effect, the already defined hover effect will not apply to darkmode.

This seems to be designed like that in order to be more specific in dark mode.

```
<section
          className="relative overflow-hidden sm:pr-8  sm:h-[20rem] rounded-lg
     bg-gray-100 dark:bg-gray-500 hover:bg-gray-200
     dark:hover:bg-gray-400 transition
```

## meta data

use [https://www.heymeta.com/](https://www.heymeta.com/) to check site's meta settings

to add a image, simply put a image named "opengraph-image.png" in the root layout level. Next.js will generate below meta tags in `<head>`

```
<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://quinn.unices.org">
<meta property="og:type" content="website">
<meta property="og:title" content="Quinn's place">
<meta property="og:description" content="The place to show what I have learned. Create with next.js, tailwindCSS">
<meta property="og:image" content="link to the image">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Quinn's place">
<meta name="twitter:description" content="The place to show what I have learned. Create with next.js, tailwindCSS">
<meta name="twitter:image" content="link to the iamge">
```
