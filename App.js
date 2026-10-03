import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [name, setName] = useState('');
  const [section, setSection] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [message, setMessage] = useState('');

  const goHome = () => setScreen('home');

  if (screen === 'welcome') {
    return (
      <View style={styles.center}>
        <Text style={styles.logo}>📚</Text>
        <Text style={styles.title}>منصة المستقبل</Text>
        <Text style={styles.subtitle}>
          منصة الأستاذ علي صالح
        </Text>
        <Text style={styles.gray}>
          تعلم • تابع • تطور
        </Text>

        <Text style={styles.creator}>
          إعداد وإشراف
        </Text>
        <Text style={styles.creatorName}>
          حسين كاظم جودة
        </Text>

        <Button
          title="ابدأ الآن"
          onPress={() => setScreen('register')}
        />
      </View>
    );
  }

  if (screen === 'register') {
    return (
      <ScrollView contentContainerStyle={styles.page}>
        <Text style={styles.pageTitle}>
          👨‍🎓 تسجيل الطالب
        </Text>

        <Text style={styles.label}>اسم الطالب</Text>
        <TextInput
          style={styles.input}
          placeholder="اكتب اسمك"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>القسم</Text>
        <TextInput
          style={styles.input}
          placeholder="مثال: مهني"
          value={section}
          onChangeText={setSection}
        />

        <Text style={styles.label}>الاختصاص</Text>
        <TextInput
          style={styles.input}
          placeholder="الحاسوب وتقنية المعلومات"
          value={specialty}
          onChangeText={setSpecialty}
        />

        <Button
          title="دخول إلى المنصة"
          onPress={() => {
            if (!name.trim()) {
              Alert.alert('تنبيه', 'اكتب اسم الطالب أولاً');
              return;
            }
            setScreen('home');
          }}
        />
      </ScrollView>
    );
  }

  if (screen === 'home') {
    return (
      <ScrollView contentContainerStyle={styles.home}>
        <Text style={styles.homeTitle}>
          أهلاً بك 👋
        </Text>

        <Text style={styles.studentName}>
          {name || 'طالب جديد'}
        </Text>

        <Text style={styles.gray}>
          {section || 'مهني'} •{' '}
          {specialty || 'الحاسوب وتقنية المعلومات'}
        </Text>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            منصة المستقبل
          </Text>
          <Text style={styles.bannerText}>
            كل ما يحتاجه الطالب في مكان واحد
          </Text>
        </View>

        <View style={styles.grid}>
          <Menu icon="📚" title="دوراتي" onPress={() => setScreen('courses')} />
          <Menu icon="📝" title="درجاتي" onPress={() => setScreen('grades')} />
          <Menu icon="🏆" title="الترتيب" onPress={() => setScreen('ranking')} />
          <Menu icon="📁" title="الملفات" onPress={() => setScreen('files')} />
          <Menu icon="📅" title="المواعيد" onPress={() => setScreen('schedule')} />
          <Menu icon="📢" title="الإعلانات" onPress={() => setScreen('news')} />
          <Menu icon="💬" title="الدعم" onPress={() => setScreen('support')} />
          <Menu icon="👤" title="حسابي" onPress={() => setScreen('profile')} />
        </View>

        <Text style={styles.footer}>
          منصة الأستاذ علي صالح
        </Text>
        <Text style={styles.small}>
          إعداد وإشراف حسين كاظم جودة
        </Text>
      </ScrollView>
    );
  }

  if (screen === 'grades') {
    return (
      <Page title="📝 درجاتي" back={goHome}>
        <Text style={styles.description}>
          نتائج الامتحانات
        </Text>

        <Card>
          <Text style={styles.cardTitle}>اللغة الإنجليزية</Text>
          <Text>امتحان اليوم</Text>
          <Text>📅 03 / 10 / 2026</Text>
          <Text style={styles.grade}>85 / 100</Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>الحاسوب</Text>
          <Text>امتحان الفصل الأول</Text>
          <Text>📅 01 / 10 / 2026</Text>
          <Text style={styles.grade}>92 / 100</Text>
        </Card>
      </Page>
    );
  }

  if (screen === 'courses') {
    return (
      <Page title="📚 دوراتي" back={goHome}>
        <Card>
          <Text style={styles.cardTitle}>
            الحاسوب وتقنية المعلومات
          </Text>
          <Text>الدروس والمواد الخاصة بالاختصاص.</Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>
            اللغة الإنجليزية
          </Text>
          <Text>دروس ومراجعات اللغة الإنجليزية.</Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>
            مواد إضافية
          </Text>
          <Text>سيتم إضافة المواد من الإدارة.</Text>
        </Card>
      </Page>
    );
  }

  if (screen === 'ranking') {
    return (
      <Page title="🏆 الترتيب" back={goHome}>
        <Rank text="🥇 أحمد علي — 96%" />
        <Rank text="🥈 محمد حسن — 94%" />
        <Rank text="🥉 حسين كاظم — 92%" />
        <Rank text="4️⃣ علي كريم — 89%" />
        <Rank text="5️⃣ مصطفى أحمد — 87%" />
      </Page>
    );
  }

  if (screen === 'files') {
    return (
      <Page title="📁 الملفات" back={goHome}>
        <File title="ملزمة الحاسوب" />
        <File title="ملزمة اللغة الإنجليزية" />
        <File title="تجميع الحاسوب" />
        <File title="ملفات إضافية" />
      </Page>
    );
  }

  if (screen === 'schedule') {
    return (
      <Page title="📅 المواعيد" back={goHome}>
        <Card>
          <Text style={styles.cardTitle}>الأحد</Text>
          <Text>الحاسوب — 10:00 صباحاً</Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>الاثنين</Text>
          <Text>اللغة الإنجليزية — 12:00 ظهراً</Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>الأربعاء</Text>
          <Text>مراجعة عامة — 10:00 صباحاً</Text>
        </Card>
      </Page>
    );
  }

  if (screen === 'news') {
    return (
      <Page title="📢 الإعلانات" back={goHome}>
        <Card>
          <Text style={styles.cardTitle}>
            إعلان مهم
          </Text>
          <Text>
            سيتم نشر مواعيد الامتحانات الجديدة هنا.
          </Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>
            دروس جديدة
          </Text>
          <Text>
            تمت إضافة مواد ودروس جديدة.
          </Text>
        </Card>

        <Card>
          <Text style={styles.cardTitle}>
            تنبيه للطلاب
          </Text>
          <Text>
            يرجى متابعة المنصة باستمرار.
          </Text>
        </Card>
      </Page>
    );
  }

  if (screen === 'support') {
    return (
      <Page title="💬 الدعم" back={goHome}>
        <Text style={styles.description}>
          اكتب رسالتك إلى إدارة المنصة
        </Text>

        <TextInput
          style={styles.message}
          placeholder="اكتب رسالتك هنا..."
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <Button
          title="إرسال الرسالة"
          onPress={() => {
            if (!message.trim()) {
              Alert.alert('تنبيه', 'اكتب الرسالة أولاً');
              return;
            }

            Alert.alert(
              'تم الإرسال',
              'تم إرسال رسالتك إلى الدعم.'
            );

            setMessage('');
          }}
        />
      </Page>
    );
  }

  if (screen === 'profile') {
    return (
      <Page title="👤 حسابي" back={goHome}>
        <Card>
          <Text style={styles.profileIcon}>👤</Text>

          <Text style={styles.profileName}>
            {name || 'طالب جديد'}
          </Text>

          <Text>
            القسم: {section || 'مهني'}
          </Text>

          <Text>
            الاختصاص:{' '}
            {specialty || 'الحاسوب وتقنية المعلومات'}
          </Text>
        </Card>

        <Button
          title="✏️ تعديل البيانات"
          onPress={() => setScreen('edit')}
        />

        <TouchableOpacity
          style={styles.logout}
          onPress={() => setScreen('welcome')}
        >
          <Text style={styles.logoutText}>
            تسجيل الخروج
          </Text>
        </TouchableOpacity>
      </Page>
    );
  }

  if (screen === 'edit') {
    return (
      <Page title="✏️ تعديل البيانات" back={() => setScreen('profile')}>
        <Text style={styles.label}>الاسم</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>القسم</Text>
        <TextInput
          style={styles.input}
          value={section}
          onChangeText={setSection}
        />

        <Text style={styles.label}>الاختصاص</Text>
        <TextInput
          style={styles.input}
          value={specialty}
          onChangeText={setSpecialty}
        />

        <Button
          title="حفظ البيانات"
          onPress={() => {
            Alert.alert('تم الحفظ', 'تم تحديث البيانات.');
            setScreen('profile');
          }}
        />
      </Page>
    );
  }

  return null;
}

function Page({ title, back, children }) {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <TouchableOpacity
        style={styles.back}
        onPress={back}
      >
        <Text style={styles.backText}>
          ← رجوع
        </Text>
      </TouchableOpacity>

      <Text style={styles.pageTitle}>
        {title}
      </Text>

      {children}
    </ScrollView>
  );
}

function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function Menu({ icon, title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.menu}
      onPress={onPress}
    >
      <Text style={styles.menuIcon}>
        {icon}
      </Text>
      <Text style={styles.menuTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

function Rank({ text }) {
  return (
    <View style={styles.rank}>
      <Text style={styles.rankText}>
        {text}
      </Text>
    </View>
  );
}

function File({ title }) {
  return (
    <TouchableOpacity
      style={styles.file}
      onPress={() =>
        Alert.alert(
          'الملف',
          'سيتم ربط الملف الحقيقي لاحقاً.'
        )
      }
    >
      <Text style={styles.fileIcon}>📄</Text>
      <Text style={styles.fileTitle}>
        {title}
      </Text>
      <Text style={styles.open}>
        فتح
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f5f8fc',
  },

  logo: {
    fontSize: 70,
    marginBottom: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1769aa',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  gray: {
    color: '#666',
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },

  creator: {
    marginTop: 30,
    color: '#666',
  },

  creatorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 25,
  },

  page: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },

  home: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 40,
    alignItems: 'center',
  },

  pageTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  homeTitle: {
    fontSize: 27,
    fontWeight: 'bold',
  },

  studentName: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 8,
  },

  banner: {
    width: '100%',
    backgroundColor: '#1769aa',
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
    marginBottom: 25,
  },

  bannerTitle: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  bannerText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
  },

  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  menu: {
    width: '47%',
    height: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  menuIcon: {
    fontSize: 38,
  },

  menuTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 8,
  },

  button: {
    backgroundColor: '#1769aa',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  back: {
    alignSelf: 'flex-start',
    marginBottom: 15,
  },

  backText: {
    color: '#1769aa',
    fontSize: 17,
    fontWeight: 'bold',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 7,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlign: 'right',
  },

  description: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginBottom: 15,
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'right',
  },

  grade: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1769aa',
    marginTop: 10,
    textAlign: 'right',
  },

  rank: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    padding: 18,
    marginBottom: 10,
  },

  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },

  file: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  fileIcon: {
    fontSize: 32,
    marginRight: 10,
  },

  fileTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'right',
  },

  open: {
    color: '#1769aa',
    fontWeight: 'bold',
  },

  message: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#fff',
    textAlign: 'right',
    textAlignVertical: 'top',
    fontSize: 16,
  },

  profileIcon: {
    fontSize: 60,
    textAlign: 'center',
  },

  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },

  logout: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  logoutText: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  footer: {
    color: '#777',
    marginTop: 15,
    fontSize: 15,
  },

  small: {
    color: '#999',
    marginTop: 5,
    fontSize: 13,
  },
});
