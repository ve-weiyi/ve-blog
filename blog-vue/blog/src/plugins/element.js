import Vue from "vue";
// 引入ElementUI
import "element-ui/lib/theme-chalk/index.css";

import {
  Avatar,
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Checkbox,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Select,
  Option,
  OptionGroup,
  DatePicker,
  Footer,
  Tabs,
  TabPane,
  Carousel,
  CarouselItem,
  Popover,
  Icon,
  Upload,
  Image
} from "element-ui";

Vue.use(Image);
Vue.use(Upload);
Vue.use(Icon);
Vue.use(Popover);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Avatar);
Vue.use(Footer);
Vue.use(OptionGroup);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Switch);
Vue.use(Tooltip);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Select);
Vue.use(Option);

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
