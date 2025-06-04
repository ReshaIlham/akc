// Project data structure
export interface Project {
  id: string
  title: string
  category: string
  description: string
  shortDescription: string
  image: string
  timeframe: string
  client: string
  industry: string
  results: string[]
  services: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
    company: string
  }
  challenge: string
  solution: string
  outcome: string
  technologies?: string[]
  gallery?: string[]
}

// Project data
export const projects: Project[] = [
  {
    id: "enterprise-pmo-transformation",
    title: "Enterprise PMO Transformation",
    category: "Financial Services",
    shortDescription:
      "We helped a leading financial institution establish a Project Management Office (PMO) that improved project success rates by 40% and reduced project costs by 25%.",
    description:
      "This comprehensive PMO transformation project involved restructuring the client's project management capabilities from the ground up. We implemented standardized methodologies, governance frameworks, and reporting systems that significantly improved project visibility and control.",
    image: "/modern-city-center.png",
    timeframe: "January 2022 - June 2022 (6 months)",
    client: "Global Financial Services Corp.",
    industry: "Financial Services",
    results: [
      "40% improvement in project success rates",
      "25% reduction in project costs",
      "320% ROI in the first year",
      "Improved stakeholder satisfaction scores by 35%",
    ],
    services: [
      "PMO Design & Implementation",
      "Process Standardization",
      "Training & Capability Building",
      "Governance Framework Development",
    ],
    testimonial: {
      quote:
        "The PMO transformation has revolutionized how we manage projects. We now have visibility, control, and predictability that we never had before.",
      author: "Sarah Johnson",
      position: "CIO",
      company: "Global Financial Services Corp.",
    },
    challenge:
      "The client was struggling with inconsistent project delivery, cost overruns, and a lack of visibility into project status and resource allocation. Multiple methodologies were being used across different departments, creating confusion and inefficiency.",
    solution:
      "We designed and implemented a centralized PMO with standardized methodologies, tools, and templates. We established clear governance processes, developed comprehensive reporting dashboards, and trained project managers on best practices.",
    outcome:
      "The new PMO structure provided clear visibility into all projects, enabling better resource allocation and prioritization. Standardized processes improved efficiency and reduced errors, while the governance framework ensured alignment with strategic objectives.",
  },
  {
    id: "agile-implementation",
    title: "Agile Implementation",
    category: "Manufacturing",
    shortDescription:
      "We guided a manufacturing company through an agile transformation that reduced time-to-market by 30% and improved team collaboration and morale.",
    description:
      "This agile transformation project helped a traditional manufacturing company adopt modern project management practices to increase flexibility and responsiveness in their product development process. The implementation included training, coaching, and organizational restructuring.",
    image: "/bustling-factory-floor.png",
    timeframe: "March 2022 - June 2022 (4 months)",
    client: "InnoManufacture Inc.",
    industry: "Manufacturing",
    results: [
      "30% reduction in time-to-market",
      "45% improvement in team collaboration metrics",
      "25% increase in employee satisfaction scores",
      "20% reduction in defects",
    ],
    services: ["Agile Transformation", "Scrum Implementation", "Team Coaching", "Organizational Change Management"],
    testimonial: {
      quote:
        "The agile transformation has changed our company culture for the better. We're now able to respond to market changes quickly and deliver higher quality products.",
      author: "Michael Chen",
      position: "VP of Operations",
      company: "InnoManufacture Inc.",
    },
    challenge:
      "The client was using traditional waterfall methodologies that resulted in long development cycles, limited flexibility, and difficulty adapting to changing market requirements. Teams worked in silos with poor communication and collaboration.",
    solution:
      "We implemented Scrum as the primary agile framework, restructured teams to be cross-functional, established regular ceremonies, and provided extensive coaching to both team members and leadership.",
    outcome:
      "The organization successfully transitioned to an agile mindset, with cross-functional teams delivering value in short iterations. Communication improved significantly, and the company became more responsive to customer needs and market changes.",
  },
  {
    id: "project-recovery",
    title: "Project Recovery",
    category: "Healthcare",
    shortDescription:
      "We recovered a critical healthcare IT project that was behind schedule and over budget, delivering it successfully within revised constraints and meeting all key requirements.",
    description:
      "This project recovery initiative rescued a failing healthcare IT implementation that was significantly behind schedule and over budget. Our intervention included a comprehensive assessment, restructuring of the project plan, and hands-on leadership to bring the project back on track.",
    image: "/collaborative-healthcare-discussion.png",
    timeframe: "August 2022 - October 2022 (3 months)",
    client: "MediCare Solutions",
    industry: "Healthcare",
    results: [
      "Successfully delivered project within revised timeline",
      "Reduced remaining budget overrun from 50% to 15%",
      "Met all critical functional requirements",
      "Restored stakeholder confidence",
    ],
    services: ["Project Recovery", "Risk Management", "Stakeholder Management", "Technical Leadership"],
    testimonial: {
      quote:
        "When Agilenesia stepped in, we had almost given up hope on this project. Their structured approach and expert leadership turned everything around.",
      author: "Elena Rodriguez",
      position: "Director of IT",
      company: "MediCare Solutions",
    },
    challenge:
      "The client's critical healthcare IT project was 6 months behind schedule, 50% over budget, and facing significant quality issues. Stakeholder confidence was extremely low, and the project was at risk of being cancelled.",
    solution:
      "We conducted a rapid assessment to identify root causes, restructured the project plan with realistic timelines, implemented rigorous risk management processes, and provided hands-on leadership to guide the team.",
    outcome:
      "The project was successfully delivered within the revised constraints, meeting all critical requirements. Stakeholder confidence was restored, and the system was successfully implemented with high user adoption.",
  },
  {
    id: "startup-scaling",
    title: "Startup Scaling",
    category: "Technology",
    shortDescription:
      "Helped a tech startup scale its project management capabilities to support rapid growth and multiple concurrent projects.",
    description:
      "This engagement focused on helping a fast-growing tech startup develop scalable project management capabilities to support their expansion. We implemented lightweight but effective processes that maintained the company's agility while providing necessary structure and visibility.",
    image: "/vibrant-startup-collaboration.png",
    timeframe: "February 2023 - April 2023 (3 months)",
    client: "TechNova Startup",
    industry: "Technology",
    results: [
      "Successfully scaled from managing 3 to 12 concurrent projects",
      "Maintained on-time delivery rate above 90%",
      "Improved resource utilization by 35%",
      "Reduced coordination overhead by 25%",
    ],
    services: ["Scalable Process Design", "Tool Implementation", "Team Structure Optimization", "Capacity Planning"],
    testimonial: {
      quote:
        "Agilenesia understood our need to stay agile while adding just enough structure to scale effectively. The frameworks they implemented have been crucial to our growth.",
      author: "David Park",
      position: "CEO",
      company: "TechNova Startup",
    },
    challenge:
      "The startup was experiencing rapid growth but struggling to manage an increasing number of concurrent projects. Their ad-hoc approach to project management was no longer sufficient, leading to missed deadlines and resource conflicts.",
    solution:
      "We designed lightweight but scalable project management processes, implemented appropriate tools, optimized team structures, and established effective capacity planning and resource management practices.",
    outcome:
      "The company successfully scaled its project management capabilities, enabling them to manage four times as many concurrent projects while maintaining high delivery quality and team satisfaction.",
  },
  {
    id: "government-transformation",
    title: "Government Transformation",
    category: "Public Sector",
    shortDescription:
      "Implemented a project governance framework for a government agency that improved transparency and accountability.",
    description:
      "This transformation project for a government agency focused on improving project governance, transparency, and accountability. We implemented a comprehensive framework that enhanced decision-making processes and ensured alignment with strategic objectives.",
    image: "/government-building.png",
    timeframe: "May 2022 - November 2022 (7 months)",
    client: "National Development Agency",
    industry: "Public Sector",
    results: [
      "Improved project transparency ratings by 60%",
      "Reduced decision-making time by 40%",
      "Enhanced accountability measures across all projects",
      "Improved public satisfaction ratings by 25%",
    ],
    services: [
      "Governance Framework Design",
      "Transparency Mechanisms",
      "Accountability Systems",
      "Public Reporting Processes",
    ],
    testimonial: {
      quote:
        "The governance framework has transformed how we manage public projects. We now have clear accountability and transparency that has rebuilt public trust.",
      author: "Robert Thompson",
      position: "Agency Director",
      company: "National Development Agency",
    },
    challenge:
      "The government agency was facing criticism for lack of transparency in project management, slow decision-making processes, and unclear accountability for project outcomes. Public trust was declining.",
    solution:
      "We designed and implemented a comprehensive governance framework with clear roles and responsibilities, transparent reporting mechanisms, streamlined decision-making processes, and robust accountability systems.",
    outcome:
      "The agency significantly improved its project transparency and accountability, leading to faster decision-making, better project outcomes, and increased public trust in the agency's work.",
  },
  {
    id: "retail-expansion",
    title: "Retail Expansion",
    category: "Retail",
    shortDescription: "Managed a retail chain's expansion project, opening 15 new locations on time and within budget.",
    description:
      "This large-scale retail expansion project involved coordinating the opening of 15 new store locations across multiple regions. Our project management approach ensured consistent execution, efficient resource utilization, and on-time, on-budget delivery.",
    image: "/bustling-market-day.png",
    timeframe: "January 2023 - September 2023 (9 months)",
    client: "RetailPlus Chain",
    industry: "Retail",
    results: [
      "All 15 locations opened on schedule",
      "Project completed 3% under budget",
      "Consistent brand experience across all new locations",
      "Reduced store opening time by 20% compared to previous expansions",
    ],
    services: ["Multi-site Project Management", "Schedule Optimization", "Vendor Coordination", "Quality Assurance"],
    testimonial: {
      quote:
        "The efficiency and consistency with which Agilenesia managed our expansion was remarkable. Every location opened on time with the same high-quality standards.",
      author: "Jennifer Lee",
      position: "COO",
      company: "RetailPlus Chain",
    },
    challenge:
      "The retail chain needed to open 15 new locations in different regions within a tight timeframe while ensuring consistent brand experience and staying within budget constraints.",
    solution:
      "We implemented a standardized approach to store openings with clear templates, coordinated vendor management, optimized scheduling across all locations, and established rigorous quality assurance processes.",
    outcome:
      "All 15 locations were opened on schedule and under budget, with consistent quality and brand experience. The approach established has become the standard for future expansion projects.",
  },
  {
    id: "digital-transformation-banking",
    title: "Digital Transformation Initiative",
    category: "Banking",
    shortDescription:
      "Led a comprehensive digital transformation for a regional bank, modernizing legacy systems and improving customer experience by 60%.",
    description:
      "This digital transformation project involved modernizing the bank's core systems, implementing new digital channels, and training staff on new technologies to enhance customer service and operational efficiency.",
    image: "/sleek-glass-tower.png",
    timeframe: "September 2022 - March 2023 (7 months)",
    client: "Regional Bank Corp.",
    industry: "Banking",
    results: [
      "60% improvement in customer satisfaction",
      "45% reduction in processing time",
      "30% increase in digital adoption",
      "25% cost savings in operations",
    ],
    services: ["Digital Strategy", "System Integration", "Change Management", "Staff Training"],
    testimonial: {
      quote:
        "The digital transformation has revolutionized our operations. We're now able to serve customers faster and more efficiently than ever before.",
      author: "Maria Santos",
      position: "Chief Digital Officer",
      company: "Regional Bank Corp.",
    },
    challenge:
      "The bank was struggling with outdated legacy systems, slow processing times, and declining customer satisfaction due to poor digital experience.",
    solution:
      "We implemented a phased digital transformation approach, modernizing core systems, introducing new digital channels, and providing comprehensive staff training.",
    outcome:
      "The bank successfully modernized its operations, significantly improved customer experience, and positioned itself as a leader in digital banking services.",
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization",
    category: "Logistics",
    shortDescription:
      "Optimized supply chain operations for a global logistics company, reducing costs by 35% and improving delivery times by 40%.",
    description:
      "This supply chain optimization project focused on streamlining operations, implementing new tracking systems, and optimizing route planning to improve efficiency and reduce costs.",
    image: "/bustling-factory-floor.png",
    timeframe: "June 2023 - December 2023 (7 months)",
    client: "Global Logistics Solutions",
    industry: "Logistics",
    results: [
      "35% reduction in operational costs",
      "40% improvement in delivery times",
      "50% increase in tracking accuracy",
      "20% reduction in carbon footprint",
    ],
    services: ["Process Optimization", "System Implementation", "Route Planning", "Performance Analytics"],
    testimonial: {
      quote:
        "The supply chain optimization has transformed our business. We're now more efficient, cost-effective, and environmentally responsible.",
      author: "James Wilson",
      position: "Operations Director",
      company: "Global Logistics Solutions",
    },
    challenge:
      "The company faced high operational costs, delayed deliveries, and poor visibility into supply chain operations, affecting customer satisfaction.",
    solution:
      "We redesigned the supply chain processes, implemented advanced tracking systems, optimized routing algorithms, and established performance monitoring dashboards.",
    outcome:
      "The company achieved significant cost savings, improved delivery performance, and gained real-time visibility into their entire supply chain network.",
  },
  {
    id: "cloud-migration-enterprise",
    title: "Enterprise Cloud Migration",
    category: "Technology",
    shortDescription:
      "Successfully migrated enterprise infrastructure to cloud, reducing IT costs by 40% and improving system reliability by 99.9%.",
    description:
      "This cloud migration project involved moving critical business applications and data to a secure cloud environment while ensuring minimal downtime and maximum security.",
    image: "/vibrant-startup-collaboration.png",
    timeframe: "January 2023 - August 2023 (8 months)",
    client: "Enterprise Tech Corp.",
    industry: "Technology",
    results: [
      "40% reduction in IT infrastructure costs",
      "99.9% system uptime achieved",
      "50% faster deployment cycles",
      "Enhanced security and compliance",
    ],
    services: ["Cloud Strategy", "Migration Planning", "Security Implementation", "Staff Training"],
    testimonial: {
      quote:
        "The cloud migration has been a game-changer for our business. We now have better performance, lower costs, and improved scalability.",
      author: "Lisa Chen",
      position: "CTO",
      company: "Enterprise Tech Corp.",
    },
    challenge:
      "The company was struggling with high IT infrastructure costs, frequent system downtime, and difficulty scaling their on-premise systems.",
    solution:
      "We developed a comprehensive cloud migration strategy, implemented security best practices, and provided extensive training to ensure smooth transition.",
    outcome:
      "The company successfully migrated to the cloud, achieving significant cost savings, improved reliability, and enhanced scalability for future growth.",
  },
  {
    id: "quality-management-pharma",
    title: "Quality Management System",
    category: "Pharmaceutical",
    shortDescription:
      "Implemented a comprehensive quality management system for a pharmaceutical company, achieving 100% regulatory compliance.",
    description:
      "This quality management project focused on establishing robust quality processes, implementing compliance frameworks, and ensuring adherence to pharmaceutical industry standards.",
    image: "/collaborative-healthcare-discussion.png",
    timeframe: "April 2023 - November 2023 (8 months)",
    client: "PharmaCorp Industries",
    industry: "Pharmaceutical",
    results: [
      "100% regulatory compliance achieved",
      "60% reduction in quality incidents",
      "30% improvement in audit scores",
      "25% faster product approval times",
    ],
    services: ["Quality System Design", "Compliance Framework", "Process Documentation", "Audit Preparation"],
    testimonial: {
      quote:
        "The quality management system has elevated our standards and given us confidence in our regulatory compliance.",
      author: "Dr. Robert Kim",
      position: "Quality Director",
      company: "PharmaCorp Industries",
    },
    challenge:
      "The pharmaceutical company faced regulatory compliance issues, quality control problems, and lengthy product approval processes.",
    solution:
      "We designed and implemented a comprehensive quality management system with robust documentation, training programs, and continuous monitoring processes.",
    outcome:
      "The company achieved full regulatory compliance, significantly improved quality metrics, and streamlined their product approval processes.",
  },
  {
    id: "customer-experience-retail",
    title: "Customer Experience Enhancement",
    category: "Retail",
    shortDescription:
      "Enhanced customer experience across multiple touchpoints, increasing customer satisfaction by 45% and sales by 30%.",
    description:
      "This customer experience project involved redesigning customer journeys, implementing new technologies, and training staff to deliver exceptional service across all channels.",
    image: "/bustling-market-day.png",
    timeframe: "February 2023 - September 2023 (8 months)",
    client: "Premium Retail Chain",
    industry: "Retail",
    results: [
      "45% increase in customer satisfaction",
      "30% growth in sales revenue",
      "50% improvement in customer retention",
      "40% increase in online engagement",
    ],
    services: ["Customer Journey Mapping", "Technology Implementation", "Staff Training", "Performance Analytics"],
    testimonial: {
      quote:
        "The customer experience transformation has exceeded our expectations. Our customers are happier, and our sales have grown significantly.",
      author: "Amanda Rodriguez",
      position: "Customer Experience Director",
      company: "Premium Retail Chain",
    },
    challenge:
      "The retail chain was experiencing declining customer satisfaction, reduced sales, and poor integration between online and offline channels.",
    solution:
      "We mapped customer journeys, implemented omnichannel solutions, redesigned store layouts, and provided comprehensive staff training on customer service excellence.",
    outcome:
      "The retail chain successfully transformed their customer experience, resulting in higher satisfaction scores, increased sales, and improved brand loyalty.",
  },
]

// This function will be used to find a project by its ID
export function findProjectById(projectId: string): Project | null {
  return projects.find((project) => project.id === projectId) || null
}
