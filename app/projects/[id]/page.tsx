import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { allProjects } from '@/data/projects';
import styles from './ProjectDetail.module.css';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = allProjects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <div className={styles.detailPage}>
        <div className={styles.container}>
          
          {/* Back button */}
          <Link href="/projects" className={styles.backLink}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Projects
          </Link>

          {/* Header */}
          <div className={styles.header}>
            <span className={styles.badge}>{project.category}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.location}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {project.location}
            </p>
          </div>

          {/* Image Gallery */}
          <div className={styles.gallery}>
            {project.images.slice(0, 4).map((img, index) => (
              <div key={index} className={styles.galleryImageWrapper}>
                <img 
                  src={img} 
                  alt={`${project.title} gallery image ${index + 1}`} 
                  className={styles.galleryImage} 
                />
              </div>
            ))}
          </div>

          {/* Content & Specs Grid */}
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p className={styles.description}>
                {project.longDescription || project.description}
              </p>

            </div>
            
            <aside className={styles.sidebar}>
              <div className={styles.statsCard}>
                <h3 className={styles.sectionTitle} style={{ fontSize: '1.4rem' }}>
                  Key Metrics
                </h3>
                <div className={styles.statsList}>
                  {project.stats.map((stat, i) => (
                    <div key={i} className={styles.statItem}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Testimonial Section - Full Width */}
          {project.testimonial && (
            <div className={styles.testimonialSection}>
              <h2 className={styles.sectionTitle}>Client Feedback</h2>
              <div className={styles.testimonialCard}>
                <div className={styles.starsContainer}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={styles.star}
                      style={{ opacity: i < project.testimonial!.rating ? 1 : 0.3 }}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className={styles.testimonialText}>
                  "{project.testimonial.text}"
                </blockquote>
                <p className={styles.testimonialAuthor}>
                  — {project.testimonial.name}
                </p>
              </div>
            </div>
          )}

          {/* Related Projects Section */}
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Explore More Projects</h2>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} index={index} />
              ))}
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}
