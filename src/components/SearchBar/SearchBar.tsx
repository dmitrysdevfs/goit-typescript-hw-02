import { Formik, Form, Field, FormikHelpers } from 'formik';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

interface FormValues {
  topic: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <Formik<FormValues>
        initialValues={{
          topic: '',
        }}
        onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => {
          onSubmit(values.topic.trim());
          actions.setSubmitting(false);
        }}
      >
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <button type="submit" className={css.iconButton}>
              🔍
            </button>
            <Field
              type="text"
              name="topic"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.input}
            />
          </div>
          <button type="submit" className={css.hiddenButton}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
