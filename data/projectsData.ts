interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'SQL Builder',
    description: `A convniant SQL query builder that allows you to construct SQL queries using a fluent interface.`,
    //imgSrc: '/static/images/something.png',
    href: 'https://github.com/BenCamps/Backpack.SqlBuilder',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
