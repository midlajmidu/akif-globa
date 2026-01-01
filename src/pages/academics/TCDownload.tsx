import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileDown, Search, Loader2, CheckCircle2, AlertCircle, Download } from 'lucide-react';

const TCDownload = () => {
  const [tcNumber, setTcNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const API_URL = "https://script.google.com/macros/s/AKfycbzaG6E-Kya-Hnrn5FeX7ykWxc7iPfCc_Tno-i-IXGjnbTfYp5rgB5X9Ktnt_2I3ArRZng/exec";

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tcNumber.trim()) return;

    setIsLoading(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const tc = tcNumber.trim().toUpperCase();
      const res = await fetch(`${API_URL}?tc=${encodeURIComponent(tc)}`);
      const data = await res.json();

      if (data.url) {
        setDownloadUrl(data.url);
      } else {
        setError(data.error || "Transfer Certificate not found.");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <PageHeader title="Transfer Certificate Download" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'TC Download' }]} />

      <section className="section-padding bg-background min-h-[60vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-strong border border-border/50 relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

              <div className="relative z-10 text-center mb-10">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <FileDown className="w-10 h-10 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-3">Download TC</h2>
                <p className="text-muted-foreground">Enter your Transfer Certificate number below to search and download.</p>
              </div>

              <form onSubmit={handleSearch} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Label htmlFor="tcNumber" className="text-base font-semibold text-primary">TC Number *</Label>
                  <div className="relative">
                    <Input
                      id="tcNumber"
                      placeholder="e.g. TC/2024/001"
                      value={tcNumber}
                      onChange={(e) => setTcNumber(e.target.value)}
                      required
                      className="h-14 pl-12 rounded-xl border-border focus:ring-accent/20 focus:border-accent text-lg transition-all"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 text-lg font-bold btn-primary rounded-xl shadow-gold group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-6 h-6 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      Search Certificate
                      <Search className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              {/* Results Section */}
              <div className="mt-10 relative z-10 animate-fade-in">
                {error && (
                  <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 flex items-start gap-3 text-destructive animate-shake">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="font-medium">{error}</p>
                  </div>
                )}

                {downloadUrl && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 flex items-start gap-3 text-green-600">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <p className="font-medium">Transfer Certificate Found Successfully!</p>
                    </div>

                    <a
                      href={downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/20 group"
                    >
                      <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
                      Download TC Now
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Having trouble? Please contact the school office at <br />
                <a href="tel:+918012800100" className="text-primary font-bold hover:text-accent transition-colors">+91 8012800100</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TCDownload;