import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kullanım Koşulları | Gituar",
  description: "Gituar uygulaması kullanım koşulları ve hizmet şartları.",
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight text-black mb-8">Kullanım Koşulları</h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-600">
          <p className="text-sm mb-8">Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
          
          <h2 className="text-xl font-medium text-black mt-8 mb-4">1. Kabul Edilme</h2>
          <p className="mb-4">
            Gituar uygulamasını indirerek, erişerek veya kullanarak bu Kullanım Koşulları'nı kabul etmiş olursunuz. Bu koşulları kabul etmiyorsanız, lütfen uygulamayı kullanmayın.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">2. Hizmetin Kullanımı</h2>
          <p className="mb-4">
            Gituar, gitaristlere akorları, sözleri ve repertuvarları yönetme imkanı sunar. Hizmetimizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Uygulamayı yasadışı amaçlar için kullanmamak.</li>
            <li>Diğer kullanıcıların deneyimini bozacak veya engelleyecek eylemlerde bulunmamak.</li>
            <li>Uygulamanın çalışmasını engellemeye, tersine mühendislik yapmaya veya sisteme zarar vermeye çalışmamak.</li>
          </ul>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">3. Hesap ve Güvenlik</h2>
          <p className="mb-4">
            Bazı özelliklere erişmek için bir hesap oluşturmanız gerekebilir. Hesap bilgilerinizin gizliliğini korumak ve hesabınız altında gerçekleşen tüm faaliyetlerden siz sorumlusunuz. Yetkisiz bir kullanım tespit ederseniz, derhal bizimle iletişime geçmelisiniz.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">4. Fikri Mülkiyet ve İçerik</h2>
          <p className="mb-4">
            Uygulamada yer alan şarkı sözleri, akorlar ve benzeri içerikler, ilgili hak sahiplerinin mülkiyetinde olabilir ve yalnızca eğitim, pratik ve kişisel kullanım amacıyla sunulmaktadır. Gituar uygulamasının yazılımı, tasarımı, logosu ve kaynak kodları tarafımıza aittir ve telif hakkı yasalarıyla korunmaktadır.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">5. Kullanıcı Tarafından Oluşturulan İçerik</h2>
          <p className="mb-4">
            Uygulamaya kendi içeriklerinizi veya repertuvarlarınızı eklediğinizde, bu içeriklerin yasal sorumluluğu tamamen size aittir. Telif hakkı veya diğer mülkiyet haklarını ihlal eden içerikler tespit edildiğinde, tarafımızca uyarı yapılmaksızın silinebilir.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">6. Uygulama İçi Satın Alımlar ve Abonelikler</h2>
          <p className="mb-4">
            Gituar, Apple App Store üzerinden uygulama içi satın alımlar veya otomatik yenilenen abonelikler sunabilir. Satın alma işlemleri Apple'ın standart politikalarına tabidir ve iptal/iade işlemleri cihazınızdaki Apple Kimliği (Apple ID) ayarlarından yapılmalıdır.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">7. Garanti Reddi ve Sorumluluğun Sınırlandırılması</h2>
          <p className="mb-4">
            Uygulama "olduğu gibi" ve "mevcut olduğu şekilde" sağlanmaktadır. Uygulamanın kesintisiz veya hatasız çalışacağı garantisini vermiyoruz. Gituar'ın kullanımından doğabilecek doğrudan veya dolaylı hiçbir veri kaybı veya zarardan tarafımız sorumlu tutulamaz.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">8. Değişiklikler</h2>
          <p className="mb-4">
            Bu koşulları dilediğimiz zaman önceden haber vermeksizin güncelleyebiliriz. Önemli değişiklikler olması durumunda uygulama içinde bildirimde bulunacağız. Değişikliklerden sonra uygulamayı kullanmaya devam etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.
          </p>

          <h2 className="text-xl font-medium text-black mt-8 mb-4">9. İletişim</h2>
          <p className="mb-4">
            Kullanım koşullarıyla ilgili her türlü sorunuz için bizimle iletişime geçebilirsiniz: <strong>iletisim@gituar.com</strong>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
