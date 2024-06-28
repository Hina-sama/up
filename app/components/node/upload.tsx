import { withNode } from '~/components/node/connector';
import { Upload } from '../ui/upload';
import { SettingsControl } from '../settings-control';

const draggable = true;

const NodeUpload = withNode(Upload, {
  draggable,
  props: {
    variant: 'primary',
    children: 'Upload Image',
  },
  related: {
    toolbar: SettingsControl,
  },
});

export { NodeUpload };