import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

const baseUrl = site.siteUrl

const pageMeta = {
  '/': {
    title: `${site.name} — Cloud Engineer | AWS Portfolio`,
    description: `${site.name} is a Cloud Engineer specializing in AWS, cloud infrastructure, CI/CD pipelines, and production-ready systems. View projects, certifications, and resume.`,
  },
  '/about': {
    title: `About ${site.name} — Cloud Engineer`,
    description: `Learn about ${site.name}, Cloud Engineer — AWS skills, experience, and cloud infrastructure expertise.`,
  },
  '/projects': {
    title: `Projects by ${site.name} — Cloud & AWS`,
    description: `Cloud engineering projects by ${site.name} — AWS infrastructure, CI/CD, Docker, and automation work.`,
  },
  '/certificates': {
    title: `${site.name} — Certificates & Credentials`,
    description: `AWS and cloud certifications by ${site.name} — Amazon EKS, Cloud Essentials, Kubernetes, and academic documents.`,
  },
  '/contact': {
    title: `Contact ${site.name} — Cloud Engineer`,
    description: `Contact ${site.name}, Cloud Engineer. Email, LinkedIn, GitHub, and resume.`,
  },
}

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/']
    const path = pathname === '/' ? '' : pathname
    const canonical = `${baseUrl}${path}`

    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('author', site.name)
    setMeta('keywords', `${site.name}, PruthviRaj P Karjagi, PruthviRajpk, Cloud Engineer, AWS, DevOps, portfolio`)
    setMeta('og:title', meta.title, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('og:url', canonical, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', 'PruthviRajpk', 'property')
    setMeta('twitter:card', 'summary', 'name')
    setMeta('twitter:title', meta.title, 'name')
    setMeta('twitter:description', meta.description, 'name')

    let canonicalEl = document.querySelector('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.rel = 'canonical'
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.href = canonical
  }, [pathname])

  return null
}
