import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { FileText, Download, ExternalLink, Info, Users, Building2, BookOpen } from 'lucide-react';
import SEO from '@/components/SEO';

const Disclosure = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const generalInfo = [
    { label: 'NAME OF THE SCHOOL', value: 'ALIF GLOBAL SCHOOL' },
    { label: 'AFFILIATION NO.(IF APPLICABLE)', value: '931454' },
    { label: 'SCHOOL CODE (IF APPLICABLE)', value: '76461' },
    { label: 'COMPLETE ADDRESS WITH PIN CODE', value: 'MARKAZ KNOWLEDGE CITY, KANNAMANGALAM, KOZHIKODE, KERALA-673580' },
    { label: 'PRINCIPAL NAME & QUALIFICATION', value: 'SHANAVAS KT, MA, MEd. SET, PGDCA, KGTE' },
    { label: 'SCHOOL EMAIL ID', value: 'alifglobalschool@gmail.com' },
    { label: 'CONTACT DETAILS (LANDLINE/MOBILE)', value: '9072500444' },
  ];

  const [documents, setDocuments] = useState<any[]>(() => {
    const cached = sessionStorage.getItem('disclosure_data');
    return cached ? JSON.parse(cached).filter((item: any) => item.category?.trim() === 'B') : [];
  });
  const [academicDocs, setAcademicDocs] = useState<any[]>(() => {
    const cached = sessionStorage.getItem('disclosure_data');
    return cached ? JSON.parse(cached).filter((item: any) => item.category?.trim() === 'C') : [];
  });
  const [loading, setLoading] = useState(!(documents.length || academicDocs.length));

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxvrytvVpP9WMalL6MuFs-qtgfI3mbcEG1JocCiKLzjmiPTM3uPC5ESVdJJNwPEWGjPWA/exec?action=mandatory')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const docsB = data.filter((item: any) => item.category?.trim() === 'B');
          const docsC = data.filter((item: any) => item.category?.trim() === 'C');
          setDocuments(docsB);
          setAcademicDocs(docsC);
          sessionStorage.setItem('disclosure_data', JSON.stringify(data));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching mandatory disclosure data:", err);
        setLoading(false);
      });
  }, []);

  const staffDetails = [
    { label: 'PRINCIPAL', value: '1' },
    { label: 'TOTAL NO. OF TEACHERS', value: '40' },
    { label: 'PGT', value: '10' },
    { label: 'TGT', value: '10' },
    { label: 'PRT', value: '20' },
    { label: 'TEACHERS SECTION RATIO', value: '1:1.5' },
    { label: 'DETAILS OF SPECIAL EDUCATOR', value: '1' },
    { label: 'DETAILS OF COUNSELLOR AND WELLNESS TEACHER', value: '1' },
  ];

  const infrastructure = [
    { label: 'TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)', value: '10117.14' },
    { label: 'NO. AND SIZE OF THE CLASS ROOMS (IN SQ FTMTR)', value: '30 & 46' },
    { label: 'NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)', value: '5 & 60' },
    { label: 'INTERNET FACILITY (Y/N)', value: 'YES' },
    { label: 'NO. OF GIRLS TOILETS', value: '20' },
    { label: 'NO. OF BOYS TOILETS', value: '20' },
    { label: 'YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL', value: 'Link', isLink: true, link: 'https://www.youtube.com/watch?v=-ZK14Lg7HI8' },
  ];

  return (
    <Layout>
      <SEO
        title="Mandatory Public Disclosure"
        description="View the mandatory public disclosure of Alif Global School as per CBSE norms. Includes general information, documents, academic details, and infrastructure."
        canonical="/disclosure"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Mandatory Public Disclosure', path: '/disclosure' }
        ]}
      />
      <PageHeader title="Mandatory Public Disclosure" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Disclosure' }]} />

      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            {/* 1. General Information */}
            <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">A: General Information</h2>
                  <div className="h-1 w-20 bg-accent mt-1 rounded-full"></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-soft">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {generalInfo.map((info, i) => (
                        <tr key={i} className="border-b border-border last:border-0 hover:bg-primary/5 transition-colors">
                          <td className="py-5 px-8 font-bold text-primary text-sm w-2/5 bg-cream/30">{info.label}</td>
                          <td className="py-5 px-8 text-body text-sm font-medium">{info.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 2. Documents and Information */}
            <div className={`mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">B: Documents and Information</h2>
                  <div className="h-1 w-20 bg-accent mt-1 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {loading && documents.length === 0 ? (
                  [1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={`skeleton-b-${i}`} className="flex items-center justify-between p-5 bg-white rounded-xl border border-border animate-pulse">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200" />
                        <div className="h-4 bg-gray-200 rounded w-full max-w-[300px]" />
                      </div>
                      <div className="w-16 h-8 bg-gray-200 rounded-lg ml-4" />
                    </div>
                  ))
                ) : (
                  documents.map((doc) => (
                    <div key={`b-${doc.number}`} className="flex items-center justify-between p-5 bg-white rounded-xl border border-border hover:border-accent/30 hover:shadow-medium transition-all group">
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/5 text-primary text-xs font-bold flex items-center justify-center border border-primary/10">
                          {doc.number}
                        </span>
                        <span className="text-sm font-semibold text-primary/80 leading-snug uppercase">{doc.title}</span>
                      </div>
                      {doc.pdf_url ? (
                        <a
                          href={doc.pdf_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-accent font-bold text-xs whitespace-nowrap px-4 py-2 rounded-lg bg-accent/5 hover:bg-accent hover:text-white transition-all ml-4"
                        >
                          VIEW <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-accent/50 font-bold text-xs whitespace-nowrap px-4 py-2 rounded-lg bg-accent/5 cursor-not-allowed opacity-60 ml-4 pointer-events-none">
                          VIEW <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3 items-start">
                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 font-medium leading-relaxed">
                  NOTE: THE SCHOOLS NEED TO UPLOAD THE SELF-ATTESTED COPIES OF THE ABOVE LISTED DOCUMENTS BY CHAIRMAN/ MANAGER/ SECRETARY AND PRINCIPAL. IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS.
                </p>
              </div>
            </div>

            {/* 3. Academics */}
            <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">C: Academics</h2>
                  <div className="h-1 w-20 bg-accent mt-1 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loading && academicDocs.length === 0 ? (
                  [1, 2, 3, 4].map((i) => (
                    <div key={`skeleton-c-${i}`} className="flex items-center justify-between p-5 bg-cream/20 rounded-xl border border-primary/5 animate-pulse">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-gray-200 flex-shrink-0" />
                        <div className="h-3 bg-gray-200 rounded w-full max-w-[200px]" />
                      </div>
                      <div className="w-8 h-8 bg-gray-200 rounded-lg ml-2" />
                    </div>
                  ))
                ) : (
                  academicDocs.map((doc) => (
                    <div key={`c-${doc.number}`} className="flex items-center justify-between p-5 bg-cream/20 rounded-xl border border-primary/5 hover:bg-primary/5 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary font-bold text-xs">
                          {doc.number}
                        </div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wide">{doc.title}</span>
                      </div>
                      {doc.pdf_url ? (
                        <a href={doc.pdf_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-accent/10 text-accent transition-colors">
                          <Download className="w-5 h-5" />
                        </a>
                      ) : (
                        <span className="p-2 rounded-lg text-accent/50 cursor-not-allowed opacity-50 pointer-events-none">
                          <Download className="w-5 h-5" />
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* 4. Staff and Teaching */}
            <div className={`mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">D: Staff (Teaching)</h2>
                  <div className="h-1 w-20 bg-accent mt-1 rounded-full"></div>
                </div>
              </div>
              <div className="bg-primary rounded-3xl p-8 text-primary-foreground shadow-strong relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 relative z-10">
                  {staffDetails.map((staff, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">{staff.label}</span>
                      <span className="text-base font-bold text-accent">{staff.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. School Infrastructure */}
            <div className={`mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">E: School Infrastructure</h2>
                  <div className="h-1 w-20 bg-accent mt-1 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {infrastructure.map((item, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-border shadow-soft flex flex-col justify-between hover:border-accent/20 transition-all">
                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">{item.label}</span>
                    {item.isLink ? (
                      <a href={item.link} className="text-accent font-bold flex items-center gap-2 hover:underline group">
                        VIEW VIDEO <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-xl font-bold text-primary">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclosure;
